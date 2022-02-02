import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Soda extends Component {
    render() {
        return (
            <div>
                im a soda
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default Soda;