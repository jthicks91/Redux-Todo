import { DELETE_TODO, ADD_TODO, TOGGLE_COMPLETE } from "../actions";

//use localStorage to store key value pairs in broswer and parse via JSON to covert items to json object;

// const initialState = {
//   todos: localStorage.getItem("todos")
//     ? JSON.parse(localStorage.getItem("todos"))
//     : [
//         {
//           value: "add a todo above",
//           completed: false,
//           important: false
//         },
//         {
//           value: "use the x on the right to delete",
//           completed: false,
//           urgent: false
//         },
//         {
//           value: "mark done or not by clicking the todo",
//           completed: false,
//           urgent: false
//         },
//         {
//           value: "use the exclamation icon to mark important",
//           completed: false,
//           urgent: false
//         }
//       ],
//   todo: ""
// };

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
