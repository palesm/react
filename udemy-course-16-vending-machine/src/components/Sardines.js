import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Sardines extends Component {
    render() {
        return (
            <div>
                we are sardines
                <Link to='/'>Home</Link>
            </div>
        );
    }
}

export default Sardines;