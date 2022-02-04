import React from 'react';
import {TextField} from "@mui/material";
import useInputState from "./hooks/useInputState";

function EditField(props) {
  const [task, setTask, resetTask] = useInputState(props.task)
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.saveTodo(task)
        resetTask()
      }}
      style={{marginLeft: '1rem'}}
    >
      <TextField
        value={task}
        onChange={setTask}
        style={{margin: 'normal'}}
        label={'Add new todo'}
        fullWidth={true}
        autoFocus={true}
      />
    </form>
  );
}

export default EditField;