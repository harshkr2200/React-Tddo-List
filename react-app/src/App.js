import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Para from "./Components/Para";
import Banner from "./Components/Banner";
import Number from "./Components/Number";
import Clock from "./Components/Clock";
// import Digital from "./Components/Digital";
import From from "./Components/Form";
import Todo from "./Components/Todo";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, seteditTodo] = useState(null);
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Clock} />
      </Switch>
      <Banner />
      <Para />
      <Number />
      <Clock />
      <From />

      <div className="todo_box">
        <Todo
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          seteditTodo={seteditTodo}
        />
        <TodoList todos={todos} setTodos={setTodos} seteditTodo={seteditTodo} />
      </div>
    </>
  );
}
export default App;
