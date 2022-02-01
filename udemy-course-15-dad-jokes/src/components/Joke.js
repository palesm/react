import React, {Component} from 'react';
import '../css/Joke.css'
import Vote from "./Vote";

class Joke extends Component {
    render() {
        return (
            <div>
                <Vote
                    value={this.props.votes}
                    id={this.props.id}
                    upvote={this.props.upvote}
                    downvote={this.props.downvote}
                />
                <p>{this.props.joke}</p>
            </div>
        );
    }
}

export default Joke;