import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <h1>ToDo List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
      <h3>
        1. Click the first column to toggle Todo to Completed/Active. (Completed is marked with
        line through)
        <br />
        2. Click the "Delete" icon to delete the Todo. (marked with line through
        and red color)
      </h3>
    </div>
  );
};

export default connect()(AddTodo);
