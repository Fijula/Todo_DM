import { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import TodoEdit from "./TodoEdit";
import "./Todo.css";
import { FiEdit } from "react-icons/fi";

function TodoMain() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    try {
      const saveTodos = JSON.parse(localStorage.getItem("savedTodos"));
      setTodos(saveTodos || []);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const addTodo = (todo) => {
    const newTodo = [
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ];
    setTodos(newTodo);
    localStorage.setItem("savedTodos", JSON.stringify(newTodo));
  };

  const toggleCompleted = (id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodo);
    localStorage.setItem("savedTodos", JSON.stringify(newTodo));
  };

  const deleteTodo = (id) => {
    const newTodo = todos.filter((todo) => todo.id !== id);
    setTodos(newTodo);
    localStorage.setItem("savedTodos", JSON.stringify(newTodo));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
    localStorage.setItem("savedTodos", JSON.stringify(todos));
  };

  const editTask = (task, id) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(newTodo);
    localStorage.setItem("savedTodos", JSON.stringify(newTodo));
  };

  const cancelTask = () => {
    setTodos(todos);
    localStorage.setItem("savedTodos", JSON.stringify(todos));
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <h2>Todo List</h2>
          <FiEdit />
        </div>
        <TodoForm addTodo={addTodo} />
        {todos.length > 0 &&
          todos.map((todo, index) =>
            todo.isEditing ? (
              <TodoEdit
                key={index}
                editTask={editTask}
                task={todo}
                cancelTask={cancelTask}
              />
            ) : (
              <Todo
                key={index}
                task={todo}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
                toggleCompleted={toggleCompleted}
              />
            )
          )}
      </div>
    </>
  );
}

export default TodoMain;
