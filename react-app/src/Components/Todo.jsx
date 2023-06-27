import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Todo.css";

function Todo({ input, setInput, todos, setTodos, editTodo, seteditTodo }) {
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    );
    setTodos(newTodo);
    seteditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [setInput, editTodo]);
  const onFormSubmit = (event) => {
    event.preventDefault();
    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed);
    }
  };
  return (
    <div className="min_box">
      <h2>Add Your Task In This Todo List </h2>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="Enter Your Task Here"
          className="task-input"
          required
          onChange={onInputChange}
          value={input}
        />
        <button type="submit" className="button-add">
          Add Task
        </button>
      </form>
    </div>
  );
}

export default Todo;
