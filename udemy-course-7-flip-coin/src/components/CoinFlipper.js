import React, {Component} from 'react';
import Coin from "./Coin";

class CoinFlipper extends Component {
    static defaultProps = {
        coins: [
            {side: "head", url: "https://upload.wikimedia.org/wikipedia/commons/0/07/US_Half_Dollar_Obverse_2015.png"},
            {side: "tail", url: "https://cdn.shopify.com/s/files/1/0002/1033/7857/products/1978_Kennedy_reverse_e1199992-196d-4a73-8c22-e8936a99a3f5_1024x1024.jpg?v=1537830446"}
        ]
    };
    constructor(props) {
        super(props);
        this.state = {
            currCoin: null,
            nFlips: 0,
            nHeads: 0,
            nTails: 0
        }
    }
    handleClick = () => {
        this.flip();
    }
    flip = () => {
        let flip = this.generateRandInt();
        let newCoin = this.props.coins[flip];
        let side = newCoin.side === "head" ? "nHeads" : "nTails";
        this.setState(currState => {
            return {
                currCoin: newCoin,
                nFlips: currState.nFlips + 1,
                [side]: currState[side] + 1
            }
        })
    }
    generateRandInt = () => {
        return Math.floor(Math.random()*2); // 0 or 1
    }
    render() {
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                {this.state.currCoin && <Coin side={this.state.currCoin.side} url={this.state.currCoin.url} />}
                <button onClick={this.handleClick}>Flip me!</button>
                <p>{this.state.nFlips} : {this.state.nHeads} head, {this.state.nTails} tails</p>
            </div>
        );
    }
}

export default CoinFlipper;