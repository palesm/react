import React, {Component} from 'react';
import axios from "axios";

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: null
        }
    }
    async componentDidMount() {
        const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/'
        let deck = await axios.get(url)
        this.setState({deck: deck.data})
                //deck_id: "b9zw50qku2ww"
                // remaining: 52
                // shuffled: true
                // success: true
    }

    render() {
        return (
            <div>
                deck id:
                {this.state.deck && this.state.deck.deck_id}
            </div>
        );
    }
}

export default Deck;