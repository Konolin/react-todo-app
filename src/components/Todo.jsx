import { useState } from "react";
import Form from "./Form";
import TaskList from "./TaskList";
import Footer from "./Footer";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);

  let completedTodoCount = todoList.filter((todo) => todo.complete).length;

  return (
    <div>
      <Form todoList={todoList} setTodoList={setTodoList} />
      <TaskList todoList={todoList} setTodoList={setTodoList} />
      <Footer
        completedTodoCount={completedTodoCount}
        todoCount={todoList.length}
      />
    </div>
  );
}
