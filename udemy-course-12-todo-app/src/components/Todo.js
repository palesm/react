import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import '../css/Todo.css'

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.updateTodo(this.state.task, this.props.id)
    }
    handleClick = (event) => {
        this.props.complete(this.props.id)
    }
    render() {
        return (
            <div className='Todo'>

                {this.props.isEdited ?
                    <form onSubmit={this.handleSubmit}>
                        <input id="task" name="task" value={this.state.task} onChange={this.handleChange} />
                        <button>Save</button>
                    </form>
                    :
                    <>
                        <div className='Icon-container' onClick={this.handleClick}>
                            {<FontAwesomeIcon  icon={this.props.isComplete ? faCheckSquare : faSquare} />}
                        </div>
                        <p style={{textDecoration: this.props.isComplete && 'line-through'}}>{this.props.task}</p>
                    </>

                }

            </div>
        );
    }
}

export default Todo;