import React from "react";

const Todos = props => {
  const onClick = event => {
    props.toggleComplete(props.id);
  };

  const toggleImportant = event => {
    props.important(props.id);
  };

  const deleteToDo = event => {
    event.stopPropagation();
    props.delete(props.id);
  };

  return (
    <div className="todo-list">
      <div className={"important"} onClick={toggleImportant}>
        <i class="fas fa-exclamation-circle" />
      </div>
      <p className="complete" onClick={onClick}>
        {/* {props.todo.value} */}
      </p>
      <div className="delete-todo" onClick={deleteToDo}>
        <i class="fas fa-minus-circle" />
      </div>
    </div>
  );
};
export default Todos;
