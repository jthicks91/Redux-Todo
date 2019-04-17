import { DELETE_TODO, ADD_TODO, TOGGLE_COMPLETE } from "../reducer/index.js";

export const addTodo = todo => {
  const newToDo = {
    value: todo,
    completed: false
  };
  return {
    type: ADD_TODO,
    payload: newToDo
  };
};

// export const handleInput = event => {
//   return {
//     type: HANDLE_INPUT,
//     payload: event.target.value
//   };
// };

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,
    payload: id
  };
};

// export const toggleImportant = id => {
//   return {
//     type: TOGGLE_IMPORTANT,
//     payload: id
//   };
// };
