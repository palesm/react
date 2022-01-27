import React, {Component} from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import * as uuid from 'uuid';
import {actions} from "../constants/actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/TodoList.css'


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {task: 'coffee', isComplete: false, id: uuid.v4(), isEdited: false},
                {task: 'evening walk', isComplete: false, id: uuid.v4(), isEdited: false},
                {task: 'learn react', isComplete: true, id: uuid.v4(), isEdited: false}
            ]
        }
    }
    addTodo = (todo) => {
        this.setState(st => ({
            todos: [...st.todos, {...todo, isComplete: false, id: uuid.v4()}]
        }))
    }
    handleIconClicked = (action, id) => {
        if (action === 'delete') {
            this.handleDelete(id)
        } else if (action === 'edit') {
            this.handleEdit(id, true)
        }
    }
    handleDelete = (id) => {
        this.setState(st => ({
            todos: [...st.todos.filter(todo => todo.id !== id)]
        }))
    }
    handleEdit = (id, isEdited) => {
        let newTodos = (st => {
            return {
                todos: st.todos.map(todo => {
                    if (todo.id === id) {
                        return {...todo, isEdited: isEdited}
                    }
                    return todo
                })
            }})
        this.setState(newTodos)
    }
    handleUpdate = (task, id) => {
        let newTodos = (st => {
            return {todos: st.todos.map(todo => {
                if (todo.id === id) {
                    return {...todo, task: task}
                } return todo
            })
        }})
        this.setState(newTodos)
        this.handleEdit(id, false)
    }
    complete = (id) => {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {...todo, isComplete: !todo.isComplete}
            }
            return todo
        })
        this.setState({todos: newTodos})
    }
    render() {
        return (
            <div className='TodoList'>
                <h1>
                    Todo List
                    <span>A Simple React Todo List App.</span>
                </h1>
                {this.state.todos.map(todo => {
                    return (
                        <div className='Todo-container' key={`div-todo-${todo.id}`}>
                            <Todo
                                key={todo.id}
                                id={todo.id}
                                task={todo.task}
                                isComplete={todo.isComplete}
                                isEdited={todo.isEdited}
                                updateTodo={this.handleUpdate}
                                complete={this.complete}
                            />
                            <div className='Icon-container'>
                                {!todo.isEdited && actions.map(action => {
                                    return (
                                        <div className='icon' key={`div-icon-${action.name}`} onClick={() => this.handleIconClicked(action.name, todo.id)}>
                                            <FontAwesomeIcon key={`icon-${action.name}`} icon={action.icon} />
                                        </div>
                                    )

                                })}
                            </div>
                        </div>
                    )
                } )}
                <NewTodoForm addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoList;