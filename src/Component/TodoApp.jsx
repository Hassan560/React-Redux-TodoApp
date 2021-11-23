import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "./Redux/Todo/TodoAction";
import cuid from "cuid";

function TodoApp() {
  const [Tasks, setTasks] = useState("");
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    dispatch(AddTodo({ task: Tasks, id: cuid() }));
    e.target.userInput.value = "";
  };
  return (
    <div>
      <form onSubmit={submit}>
        <input
          type="text"
          name="userInput"
          onChange={(e) => {
            setTasks(e.target.value);
          }}
        />
        <button type="submit">AddTodo</button>
      </form>
    </div>
  );
}

export default TodoApp;
