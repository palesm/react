import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Twix extends Component {
    render() {
        return (
            <div>
                im a twix
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default Twix;