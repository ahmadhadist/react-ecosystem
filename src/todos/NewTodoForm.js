import React, { useState } from "react";
import { connect } from "react-redux";
import "./NewTodoForm.css";
import { createTodo } from "./actions";

const NewTodoForm = ({ todos, onCreatedPressed }) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatedPressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatedPressed: (text) => dispatch(createTodo(text)),
});

// connect()()
export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
