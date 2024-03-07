import { useState } from "react";

export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}
