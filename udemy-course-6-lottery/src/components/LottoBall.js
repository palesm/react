import React, {Component} from 'react';
import '../css/LottoBall.css'

class LottoBall extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {number} = this.props;
        return (
            <div className="LottoBall">
                <div id="circle">
                    <div id="text">{number}</div>
                </div>
            </div>
        );
    }
}

export default LottoBall;