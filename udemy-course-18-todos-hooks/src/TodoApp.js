import React from 'react';
import {AppBar, Grid, Paper, Toolbar, Typography} from "@mui/material";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";
import {v4} from "uuid";

function TodoApp(props) {
  const initialTodos = [{id: v4(), task: "walk the fish", completed: true}]
  const {todos, addTodo, toggleCheck, removeTodo, saveTodo} = useTodoState(initialTodos);
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
        <Grid item lg={6} md={8} xs={10}>
          <TodoForm addTodo={addTodo}/>
          {todos.length ?
            <TodoList todos={todos} toggleCheck={toggleCheck} removeTodo={removeTodo} saveTodo={saveTodo}/> : null}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;