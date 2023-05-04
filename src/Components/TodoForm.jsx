/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Todo.css";

const TodoForm = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-todo"
        placeholder="Enter items.."
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button type="submit">Add items</button>
    </form>
  );
};

export default TodoForm;
