import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function TodoItem({ todo, onEdit, onDelete }) {
  return (
    <li className="todo-item">
      <div className="left">
        <input type="checkbox" className="round-checkbox" />
        <span>{todo}</span>
      </div>
      <div className="right">
        <button className="icon edit" onClick={onEdit}>
          <FaEdit />
        </button>
        <button className="icon delete" onClick={onDelete}>
          <FaTrash />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;