import React, {Component} from 'react';
import Box from "./Box";
import "../css/BoxContainer.css"
import {colors} from "../constants";

class BoxContainer extends Component {
    static defaultProps = {
        colors: colors,
        numBoxes: 24
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={"Box-container"}>
                {Array.from({length: this.props.numBoxes}).map(() => <Box colors={this.props.colors}/>)}
            </div>
        );
    }
}

export default BoxContainer;