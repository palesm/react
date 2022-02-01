import React, {Component} from 'react';
import '../css/JokeList.css'
import axios from "axios";
import Joke from "./Joke";

class JokeList extends Component {
    static defaultProps = {
        jokesNum: 10
    }
    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]")
        }
        this.seenJokes = new Set(this.state.jokes.map(j => j.text));
        // console.log(this.seenJokes)
    }
    componentDidMount() {
        if (this.state.jokes.length === 0) this.getJokes();
    }
    async getJokes() {
        try {
            let jokes = [];
            while (jokes.length < this.props.jokesNum) {
                let res = await axios.get("https://icanhazdadjoke.com/", {
                    headers: { Accept: "application/json" }
                });
                let newJoke = res.data.joke;
                if (!this.seenJokes.has(newJoke)) {
                    jokes.push({ id: res.data.id, text: newJoke, votes: 0 });
                } else {
                    console.log("FOUND A DUPLICATE!");
                    console.log(newJoke);
                }
            }
            this.setState(
                st => ({
                    loading: false,
                    jokes: [...st.jokes, ...jokes]
                }),
                () =>
                    window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes))
            );
        } catch (e) {
            alert(e);
            this.setState({ loading: false });
        }
    }
    handleVote = (id, delta) => {
        let jokes = this.state.jokes.map(joke => {
            if(joke.id === id) {
                return {...joke, votes: joke.votes + delta}
            } else return {...joke}
        })
        this.setState({jokes}, () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)))
    }
    handleClick = () => {
        this.setState({jokes: []}, () => this.getJokes())
    }
    render() {
        return (
            <div>
                <h1>Dad jokes :)</h1>
                <button onClick={this.handleClick}>New jokes</button>
                {this.state.jokes && this.state.jokes.map(joke => {
                    return (
                        <Joke
                            key={joke.id}
                            id={joke.id}
                            joke={joke.text}
                            votes={joke.votes}
                            upvote={() => this.handleVote(joke.id, 1)}
                            downvote={() => this.handleVote(joke.id, -1)}
                        />)
                })}
            </div>
        );
    }
}

export default JokeList;