import Task from "./Task";
import styles from "./taskList.module.css";

export default function TaskList({ todoList, setTodoList }) {
  return (
    <div className={styles.list}>
      {todoList.map((item) => (
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
