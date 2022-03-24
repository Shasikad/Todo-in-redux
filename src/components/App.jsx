import React from "react";
import AddTodo from "./AddTodos";
import TodoList from "./TodoList";
import Link from "../components/Link";

const App = () => (
  <div>
    <h1>TodoList</h1>
    <AddTodo />
    <TodoList />
    <div>
      <Link filter={"SHOW_ALL"}>All</Link>
      <Link filter={"SHOW_ACTIVE"}>Active</Link>
      <Link filter={"SHOW_COMPLETE"}>Complete</Link>
    </div>
  </div>
);

export default App;
