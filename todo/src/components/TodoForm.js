import React from "react";
import { connect } from "react-redux";
import { addTodo, handleInput } from "../actions";

const TodoForm = props => {
  const submit = event => {
    event.preventDefault();
    props.addTodo(props.todo);
  };
  return (
    <form onSubmit={submit}>
      <input
        name="todo"
        type="text"
        value={props.todo}
        onChange={props.handleInput}
        placeholder="Add new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  { addTodo, handleInput }
)(TodoForm);
