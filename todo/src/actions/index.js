export const ADD_TODO = "ADD_TODO";
// export const HANDLE_INPUT = "HANDLE_INPUT";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_IMPORTANT = "TOGGLE_IMPORTANT";

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

export const toggleImportant = id => {
  return {
    type: TOGGLE_IMPORTANT,
    payload: id
  };
};
