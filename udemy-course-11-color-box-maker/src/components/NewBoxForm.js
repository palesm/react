import React, {Component} from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: '',
            height: '',
            color: ''
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addNewBox(this.state)
        this.setState({
            width: '',
            height: '',
            color: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="width">
                    Width
                    <input id="width" name="width" value={this.state.width} onChange={this.handleChange} />
                </label>
                <label htmlFor="height">
                    height
                    <input id="height" name="height" value={this.state.height} onChange={this.handleChange} />
                </label>
                <label htmlFor="color">
                    color
                    <input id="color" name="color" value={this.state.color} onChange={this.handleChange} />
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default NewBoxForm;