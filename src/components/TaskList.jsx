import Task from "./Task";

export default function TaskList({ todoList }) {
  return (
    <div>
      {todoList.map((item) => (
        <Task key={item} item={item} />
      ))}
    </div>
  );
}
