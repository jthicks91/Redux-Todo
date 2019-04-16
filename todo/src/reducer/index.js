import { HANDLE_INPUT, ADD_TODO, TOGGLE_COMPLETE } from "../actions";

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
    { value: "Learn more Redux", completed: false }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    //add new todo from the form to the array of state
    case ADD_TODO:
      let newTodoList = [
        ...state.todos,
        {
          value: action.payload,
          completed: false,
          important: false
        }
      ];
      localStorage.setItem("todos", JSON.stringify(newTodoList));
      return {
        ...state,
        todos: newTodoList,
        todo: ""
      };

    case HANDLE_INPUT:
      //updating state's todo input field in the form
      return { ...state, todo: action.payload };

    // maps through current todos list, locates item with index passed via action and toggles the value's completed property for the particular item.
    case TOGGLE_COMPLETE:
      let completedToDoList = state.todos.map((item, index) =>
        index === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
      localStorage.setItem("todos", JSON.stringify(completedToDoList));
      return {
        ...state,
        todos: completedToDoList
      };
    // case DELETE_TODO:
    //   //filters todos on  state that dont match ID passed by action
    //   let deletedList = state.todos.filter(
    //     (item, index) => index !== action.payload
    //   );
    //   localStorage.setItem("todos", JSON.stringify(deletedList));
    //   return {
    //     ...state,
    //     todos: deletedList
    //   };

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
    default:
      return state;
  }
};
