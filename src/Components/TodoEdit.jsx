/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Todo.css";

function TodoEdit({ editTask, task, cancelTask }) {
  const [inputValue, setInputValue] = useState(task.task);
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    editTask(inputValue, task.id);
    setInputValue("");
  };

  const handleCancel = () => {
    cancelTask();
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input-edit"
        placeholder="Update item.."
        onChange={handleChange}
        value={inputValue}
      ></input>
      <button type="submit">Save</button>
      <button type="cancel" className="cancel" onClick={handleCancel}>
        Canel
      </button>
    </form>
  );
}

export default TodoEdit;
