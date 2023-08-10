import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed }) => (
  <div className="todo-item-container">
    <h3>{todo.text}</h3>
    <div className="button-container">
      <button className="button-completed">Mark as completed</button>
      <button
        onClick={() => onRemovePressed(todo.text)}
        className="button-remove"
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
