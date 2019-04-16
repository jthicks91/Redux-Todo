import React from "react";
import { connect } from "react-redux";
import Todos from "./Todos";
import { DELETE_TODO } from "../actions/index";
import styled from "styled-components";

const ToDoListStyle = styled.div`
  margin: 0 auto;
  width: 600px;
  background: #fafad2;
  border: 1px solid black;
  h2 {
    font-size: 20px;
  }
`;

class ToDoList extends React.Component {
  clearHandler = event => {
    event.preventDefault();
    console.log(this.props);
    this.props.DELETE_TODO(this.props.todos);
  };
  render() {
    return (
      <ToDoListStyle>
        <div>
          {this.props.todos.map((todo, index) => {
            return <Todos todo={todo} key={index} index={index} />;
          })}
        </div>
        <button onClick={this.clearHandler}>Clear All Done</button>
      </ToDoListStyle>
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
  { DELETE_TODO }
)(ToDoList);
