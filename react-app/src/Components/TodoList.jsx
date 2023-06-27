import React from "react";
import "./Todo.css";

const TodoList = ({ todos, setTodos, seteditTodo }) => {
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };
  // const handleComplete = (todo) => {
  //   setTodos(
  //     todos.map((item) => {
  //       if (item.id === todo.id) {
  //         return { ...item, completed: !item.completed };
  //       }
  //       return item;
  //     })
  //   );
  // }; 
  const handelEdit = ({ id }) => {
    const findTodo = todos.find((todo) => todo.id === id);
    seteditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo, index) => (
        <div className="list-add-box">
          <li className="todo-list" key={todo.id}>
            <span>{index + 1}</span>
            <input
              type="text"
              value={todo.title}
              className="list"
              onChange={(event) => event.preventDefault()}
            />
            {/* <button
              className="button-complete task-button"
              onChange={() => handleComplete(todo)}
            >
              <i class="fa fa-thumbs-up"></i>
            </button> */}
            <button
              className="button-edit task-button"
              onClick={() => handelEdit(todo)}
            >
              <i class="far fa-edit"></i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i class="fa fa-trash"></i>
            </button>
          </li>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
