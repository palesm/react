import React, {Component} from 'react';
import {Link} from "react-router-dom";

class VendingMachine extends Component {
    render() {
        return (
            <div>
                im the vendingMachine
                <h1>
                    <Link to='/soda'>Soda</Link>
                </h1>
                <h1>
                    <Link to='/twix'>Twix</Link>
                </h1>
                <h1>
                    <Link to='/sardines'>Sardines</Link>
                </h1>
            </div>
        );
    }
}

export default VendingMachine;