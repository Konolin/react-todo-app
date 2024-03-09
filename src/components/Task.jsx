import styles from "./task.module.css";

export default function Task({ item, todoList, setTodoList }) {
  function handleDelete(item) {
    setTodoList(todoList.filter((todo) => todo !== item));
  }

  function handleComplete(name) {
    setTodoList(
      todoList.map((todo) =>
        todo.name === name ? { ...todo, complete: !todo.complete } : todo
      )
    );
  }

  const className = item.complete ? styles.completed : "";

  return (
    <div className={styles.task}>
      <div className={styles.taskName}>
        <span className={className} onClick={() => handleComplete(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
