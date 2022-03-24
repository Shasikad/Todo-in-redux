import React from "react";
import { connect } from "react-redux";

let nextTodoId = 0;
const addTodo = (text) => ({
  type: "ADD_TODO",
  id: nextTodoId++,
  complete: false,
  text
});

const AddTodo = ({ dispatch }) => {
  let input;
  let onClick = (e) => {
    if (input.value.trim() !== "") {
      dispatch(addTodo(input.value.trim()));
    }
  };
  return (
    <>
      <input type="text" ref={(node) => (input = node)} />
      <button type="submit" onClick={onClick}>
        Add Todo
      </button>
    </>
  );
};

export default connect()(AddTodo);
