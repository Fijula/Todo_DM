/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";

function Todo({ task, editTodo, deleteTodo, toggleCompleted }) {
  return (
    <div className="todo">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleCompleted(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FiEdit onClick={() => editTodo(task.id)} />
        <MdDeleteForever
          className="delete"
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
}

export default Todo;
