import React from 'react';
import {Paper, TextField} from "@mui/material";
import useInputState from "./hooks/useInputState";

function TodoForm(props) {
  const [task, setTask, resetTask] = useInputState("");
  return (
    <Paper>
      <form onSubmit={event => {
        event.preventDefault()
        props.addTodo(task)
        resetTask()
      }}
      >
        <TextField value={task} onChange={setTask} style={{margin: 'normal'}} label={'Add new todo'} fullWidth={true}/>
      </form>
      </Paper>
  );
}

export default TodoForm;