import React from "react";

const Todos = props => {
  const onClick = e => {
    props.toggleComplete(props.id);
  };

  const toggleImportant = e => {
    props.important(props.id);
  };

  const deleteToDo = e => {
    e.stopPropagation();
    props.delete(props.id);
  };

  return (
    <div className="todo-list">
      <div
        className={props.Todos.important ? "marker important" : "marker"}
        onClick={toggleImportant}
      >
        <i class="fas fa-exclamation-circle" />
        <p
          className={props.todos.completed ? "complete" : null}
          onClick={onClick}
        >
          {props.todos.value}
        </p>
        <div className="delete-todo" onClick={deleteToDo}>
          <i class="fas fa-minus-circle" />
        </div>
      </div>
    </div>
  );
};
export default Todos;
