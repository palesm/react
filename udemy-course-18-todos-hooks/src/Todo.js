import React from 'react';
import {Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import {orange, red} from "@mui/material/colors";
import toggleState from "./hooks/toggleState";
import EditField from "./EditField";

function Todo(props) {
  const {todo, removeTodo, toggleCheck} = props
  const [isEdited, toggleIsEdited] = toggleState();
  const saveTodo = (newTask) => {
    props.saveTodo(todo.id, newTask)
    toggleIsEdited()
  }
  return (
    <>
      {isEdited ?
        <EditField task={todo.task} saveTodo={saveTodo}/>
        :
        <>
          <ListItem key={`listItem-${todo.id}`}>
            <Checkbox checked={todo.completed} onClick={() => toggleCheck(todo.id)} />
            <ListItemText key={`listItemText-${todo.id}`} style={{textDecoration: todo.completed ? "line-through" : 'none'}}>
              {todo.task}
            </ListItemText>
            <ListItemSecondaryAction>
              <IconButton aria-label='edit' onClick={() => toggleIsEdited()} >
                <Edit sx={{ color: orange[500] }} />
              </IconButton>
              <IconButton aria-label='delete' onClick={() => removeTodo(todo.id)} >
                <Delete sx={{ color: red[500] }}/>
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </>
      }
    </>
  );
}

export default Todo;