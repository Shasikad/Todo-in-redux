import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
//import Link from "../components/Link";

const App = () => (
  <div>
    <h1>TodoList</h1>
    <AddTodo />
    <TodoList />
  </div>
);

export default App;
