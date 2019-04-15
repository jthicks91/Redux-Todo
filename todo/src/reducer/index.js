import {
  HANDLE_INPUT,
  ADD_TODO,
  TOGGLE_COMPLETE,
  DELETE_TODO,
  TOGGLE_IMPORTANT
} from "../actions";

//use localStorage to store key value pairs in broswer and parse via JSON to covert items to json object;

const initialState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [
        {
          value: "add a todo above",
          completed: false,
          important: false
        },
        {
          value: "use the x on the right to delete",
          completed: false,
          urgent: false
        },
        {
          value: "mark done or not by clicking the todo",
          completed: false,
          urgent: false
        },
        {
          value: "use the exclamation icon to mark important",
          completed: false,
          urgent: false
        }
      ],
  todo: ""
};
