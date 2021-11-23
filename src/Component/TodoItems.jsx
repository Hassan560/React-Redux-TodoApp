import React, { useState, useRef } from "react";
import { DelTodo, EdiTodo } from "./Redux/Todo/TodoAction";
import { useDispatch } from "react-redux";

function TodoItems({ task }) {
  const [IsUpdate, setIsUpdate] = useState(false);
  const textRef = useRef(null);
  const dispatch = useDispatch();

  const editsubmit = (e) => {
    e.preventDefault();
    dispatch(
      EdiTodo({
        message: textRef.current.value,
        id: task.id,
      })
    );
    setIsUpdate(false);
    textRef.current = null;
  };
  const RenderForm = () => {
    return (
      <form onSubmit={editsubmit}>
        <input ref={textRef} type="text" defaultValue={task.task} />
        <button type="submit">Edit Todo</button>
      </form>
    );
  };

  const RenderItem = () => {
    return (
      <li>
        {task.task}
        <button onClick={() => setIsUpdate(true)}>Edit</button>
        <button onClick={() => dispatch(DelTodo(task.id))}>Delete</button>
      </li>
    );
  };
  return <div>{IsUpdate ? RenderForm() : RenderItem()}</div>;
}

export default TodoItems;
