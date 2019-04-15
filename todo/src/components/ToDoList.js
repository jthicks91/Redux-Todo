import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import { toggleComplete, deleteTodo, toggleImportant } from "../actions";

const ToDoList = props => {
  return (
    <div className="todo-list">
      {props.todos.map((todo, index) => (
        <Todos
          todo={todo}
          key={index}
          id={index}
          toggleComplete={props.toggleComplete}
          delete={props.deleteTodo}
          important={toggleImportant}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleComplete, deleteTodo, toggleImportant }
)(ToDoList);
