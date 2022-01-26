import React, {Component} from 'react';

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({task: ''})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="task">
                    New Todo
                    <input id="task" name="task" value={this.state.task} onChange={this.handleChange}/>
                </label>
                <button>Submit</button>
            </form>
        );
    }
}

export default NewTodoForm;