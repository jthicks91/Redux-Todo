import React, { Component } from "react";
import TodoForm from "../src/components/TodoForm";
import TodoList from "../src/components/TodoList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
