import React from 'react';
import {Divider, List, Paper} from "@mui/material";
import Todo from "./Todo";

function TodoList(props) {
  return (
    <Paper>
      <List>
        {props.todos && props.todos.map((todo, index) => {
          return (
            <React.Fragment key={`container-${todo.id}`}>
              <Todo
                key={`todo-${todo.id}`}
                todo={todo}
                toggleCheck={props.toggleCheck}
                removeTodo={props.removeTodo}
                saveTodo={props.saveTodo}
              />
              {props.todos.length-1 > index && <Divider key={`divider-${todo.id}`}/>}
            </React.Fragment>
          )
        })}
      </List>
    </Paper>
  );
}

export default TodoList;