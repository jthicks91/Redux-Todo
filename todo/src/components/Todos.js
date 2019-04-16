import React from "react";
import { connect } from "react-redux";
import { toggleComplete } from "../actions/index";

class Todos extends React.Component {
  toggleComplete = () => {
    this.props.toggleComplete(this.props.index);
  };
  render() {
    return (
      <h2
        onClick={this.toggleComplete}
        style={
          this.props.todo.complete ? { textDecoration: "line-through" } : null
        }
      >
        {this.props.todo.value}
      </h2>
    );
  }
}

export default connect(
  null,
  { toggleComplete }
)(Todos);
