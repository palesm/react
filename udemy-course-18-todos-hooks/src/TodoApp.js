import React from 'react';
import {useState} from "react";
import {Typography, Paper, AppBar, Toolbar, Grid} from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {v4} from "uuid";

function TodoApp(props) {
  const initialTodos = [
    {id: v4(), task: 'walk the fish', completed: false},
    {id: v4(), task: 'learn react', completed: false},
    {id: v4(), task: 'sleep', completed: true}
  ]
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = task => {
    setTodos([...todos, {id: v4(), task: task, completed: false}])
  }
  const toggleCheck = (id) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, completed: !todo.completed}
      } else return todo
    })
    setTodos(newTodos)
  }
  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  const saveTodo = (id, newTask) => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {...todo, task: newTask}
      } else return todo
    })
    setTodos(newTodos)
  }
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
      }}
      elevation={0}
    >
      <AppBar position='static' style={{height: '64px'}}>
        <Toolbar>
          <Typography>Todos with hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container style={{marginTop: '1rem', justifyContent: 'center'}}>
        <Grid item lg={6} m={8} s={11}>
          <TodoForm addTodo={addTodo}/>
          <TodoList todos={todos} toggleCheck={toggleCheck} removeTodo={removeTodo} saveTodo={saveTodo}/>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;