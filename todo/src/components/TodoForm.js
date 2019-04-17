import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import styled from "styled-components";

const ToDoFormStyle = styled.div`
  margin: 0 auto;
  width: 600px;
  height: 100px;
  background: lightgray;
  border: 1px solid black;
  h2 {
    font-size: 15px;
  }
`;

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  inputHandler = event => {
    this.setState({ input: event.target.value });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <ToDoFormStyle>
        <h2>Todos List:</h2>
        <form onSubmit={this.submitHandler}>
          <input
            name="input"
            type="text"
            value={this.state.input}
            onChange={this.inputHandler}
            placeholder="Add new todo..."
          />
          <button type="submit">Add To-Do</button>
        </form>
      </ToDoFormStyle>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo }
)(TodoForm);
