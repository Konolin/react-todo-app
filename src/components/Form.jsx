import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todoList, setTodoList }) {
  const [todo, setTodo] = useState({ name: "", complete: false });

  function handleSubmit(e) {
    e.preventDefault();
    if (todo.name !== "") {
      setTodoList([...todoList, todo]);
      setTodo({ name: "", complete: false });
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          onChange={(e) => setTodo({ name: e.target.value, complete: false })}
          value={todo.name || ""}
          type="text"
          placeholder="Enter task..."
        />
        <button className={styles.button} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
