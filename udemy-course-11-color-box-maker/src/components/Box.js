import React, {Component} from 'react';

class Box extends Component {
    static defaultProps = {
        width: 100,
        height: 100,
        color: 'purple'
    }
    constructor(props) {
        super(props);
    }
    handleClick = (event) => {
        event.preventDefault()
        console.log('delete', this.props.keyProp)
        this.props.deleteBox(this.props.keyProp)
    }
    render() {
        return (
            <div>
                <div style={{width: `${this.props.width}px`, height: `${this.props.height}px`, backgroundColor:`${this.props.color}` }}>
                </div>
                <button onClick={this.handleClick}>Delete</button>
            </div>

        );
    }
}

export default Box;