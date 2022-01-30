import React, {Component} from 'react';
import axios from "axios";
import Card from "./Card";
import "../css/Deck.css"

const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'
class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null,
            drawn: []
        }
        this.handleClick = this.handleClick.bind(this)
    }
    async componentDidMount() {
        const url = `${API_BASE_URL}/new/shuffle/`
        let deck = await axios.get(url)
        this.setState({deck: deck.data})
                //deck_id: "b9zw50qku2ww"
                // remaining: 52
                // shuffled: true
                // success: true
    }
    async handleClick() {
        const url = `${API_BASE_URL}/${this.state.deck.deck_id}/draw/`;
        try {
            let res = await axios.get(url)
            if (!res.data.success) {
                throw new Error('No card remaining')
            }
            let card = res.data.cards[0]
            this.setState(st => ({
                drawn: [
                    ...st.drawn,
                    {
                        id: card.code,
                        image: card.image
                    }
                ]
            }))
        } catch (err) {
            alert(err)
        }
    }
    render() {
        return (
            <div>
                <h1>Card dealer</h1>
                <button onClick={this.handleClick}>Draw card</button>
                <div className="Card-container">
                    { this.state.drawn && this.state.drawn.map(card => {
                        return (<Card key={card.id} src={card.image} />)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Deck;