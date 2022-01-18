import React, {Component} from 'react';

class StateClicker extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0}
    }
    handleClick = (e) => {
        this.setState({number: this.randNumGenerator()})
    }
    randNumGenerator = () => {
        return Math.floor(Math.random() * 10)
    }
    render() {
        let display;
        if (this.state.number === 7) {
            display = <p>You win!</p>
        } else {
            display = <button onClick={this.handleClick}>Generate random number</button>
        }
        return (
            <div>
                <p>{this.state.number}</p>
                {display}
            </div>
        );
    }
}

export default StateClicker;