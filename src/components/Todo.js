import React from "react";
import PropTypes from "prop-types";
import DeleteIcon from "../images/delete.png";

const Todo = ({
  onClick,
  completed,
  text,
  deleted,
  toggleTodo,
  key,
  deleteTodo,
}) => (
  <tr
    onClick={onClick}
    style={{
      textDecoration: completed || deleted ? "line-through" : "none",
      color: deleted ? "red" : "-internal-root-color",
    }}
  >
    <td onClick={() => toggleTodo(key)}>&#9744;&nbsp;{text}</td>
    <td onClick={() => deleteTodo(key)}>
      <img src={DeleteIcon} alt="delete icon" />
    </td>
  </tr>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
