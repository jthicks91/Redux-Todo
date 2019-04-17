import React, { Component } from "react";
import TodoForm from "../src/components/TodoForm";
import ToDoList from "./components/ToDoList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoForm />
        <ToDoList />
      </div>
    );
  }
}

export default App;
