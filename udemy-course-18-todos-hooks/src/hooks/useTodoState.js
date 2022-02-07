import {v4} from "uuid";
import useLocalStorageState from "./useLocalStorageState";

function useTodo(initialTodos) {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
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
  return {todos, addTodo, toggleCheck, removeTodo, saveTodo}
}
export default useTodo;
