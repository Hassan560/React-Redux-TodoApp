import React from "react";
import { useSelector } from "react-redux";
import TodoItems from "./TodoItems";

function TodoLists() {
  const taskObj = useSelector((state) => state.todo);
  const taskItems = taskObj.map((elem) => {
    return <TodoItems task={elem} key={elem.id} />;
  });
  return (
    <div>
      <ol>{taskItems}</ol>
    </div>
  );
}

export default TodoLists;
