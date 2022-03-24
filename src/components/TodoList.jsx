import React from "react";
import Todo from "../components/Todo";
import { connect } from "react-redux"

const Todolist = () => {
  return (
    <ul>
      {todos != null &&
        todos.map((todo) => (
          <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  todos: filterTodos(state.todos, state.filterTodo)
});

const mapDispatchToProps = (dispatch) => ({
  toggleTodo: (id) => dispatch(toggleTodo(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(Todolist;
