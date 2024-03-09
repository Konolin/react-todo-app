import Task from "./Task";
import styles from "./taskList.module.css";

export default function TaskList({ todoList, setTodoList }) {
  const sortedTasks = todoList
    .slice()
    .sort((a, b) => Number(a.complete) - Number(b.complete));

  return (
    <div className={styles.list}>
      {sortedTasks.map((item) => (
        <Task
          key={item.name}
          item={item}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      ))}
    </div>
  );
}
