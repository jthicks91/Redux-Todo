export const ADD_TODO = "ADD_TODO";
// export const HANDLE_INPUT = "HANDLE_INPUT";
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";
export const DELETE_TODO = "DELETE_TODO";
// export const TOGGLE_IMPORTANT = "TOGGLE_IMPORTANT";

const initialState = {
  todos: [
    { value: "Learn Redux", completed: false },
    { value: "Learn React", completed: false }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    //add new todo from the form to the array of state
    case ADD_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.payload)
      };

    // maps through current todos list, locates item with index passed via action and toggles the value's completed property for the particular item.
    case TOGGLE_COMPLETE:
      const completedToDoList = state.todos.map((todo, index) => {
        if (index === action.payload) {
          return { value: todo.value, completed: !todo.completed };
        } else return todo;
      });
      return {
        ...state,
        todos: completedToDoList
      };

    case DELETE_TODO:
      const filteredArray = state.todos.filter(todo => {
        return !todo.completed ? todo : null;
      });
      return {
        ...state,
        todos: filteredArray
      };
    default:
      return state;
  }
};

// case TOGGLE_IMPORTANT:
//   let importantList = state.todos.map((item, index) =>
//     index === action.payload
//       ? { ...item, important: !item.important }
//       : item
//   );
//   localStorage.setItem("todos", JSON.stringify(importantList));
//   return {
//     ...state,
//     todos: importantList
//   };
