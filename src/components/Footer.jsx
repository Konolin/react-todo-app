import styles from "./footer.module.css";

export default function Footer({ completedTodoCount, todoCount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>Completed tasks: {completedTodoCount}</span>
      <span className={styles.item}>Total tasks: {todoCount}</span>
    </div>
  );
}
