import React from "react";
// import { connect } from "react-redux";
// import { toggleComplete } from "../actions/index";

class Todos extends React.Component {
  toggleComplete = () => {
    this.props.toggle(this.props.index);
  };
  render() {
    console.log(this.props);
    return <h2 onClick={this.props.toggle}>{this.props.todo.value}</h2>;
  }
}

export default Todos;
