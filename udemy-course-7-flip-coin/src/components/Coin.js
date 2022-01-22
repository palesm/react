import React, {Component} from 'react';
import "../css/Coin.css"

class Coin extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {side, url} = this.props
        return (
            <div>
                <img className="Coin-img" alt={side} src={url}/>
            </div>
        );
    }
}

export default Coin;