import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TaskList todoList={todoList} />
    </div>
  );
}
