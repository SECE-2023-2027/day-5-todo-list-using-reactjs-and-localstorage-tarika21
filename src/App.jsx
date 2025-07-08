import React, { useState } from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import { FaTrash } from "react-icons/fa";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!input.trim()) return;
    if (editIndex !== null) {
      const updated = [...todos];
      updated[editIndex] = input;
      setTodos(updated);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const handleEdit = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  const handleDeleteAll = () => {
    setTodos([]);
  };

  return (
    <div className="container">
      <div className="todo-box">
        <h2>Add a Todo</h2>
        <div className="input-section">
          <input
            type="text"
            placeholder="Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleAdd}>Save</button>
        </div>

        <div className="todo-header">
          <h3>Your Todo's</h3>
          {todos.length > 0 && (
            <button className="delete-all" onClick={handleDeleteAll}>
              <FaTrash />
            </button>
          )}
        </div>

        <ul className="todo-list">
          {todos.map((todo, index) => (
            <TodoItem
              key={index}
              todo={todo}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;