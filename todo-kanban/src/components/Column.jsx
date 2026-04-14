import { useTasks } from "../context/TaskContext";
import AddTask from "./AddTask";

export default function Column({ title, status }) {
  const { tasks } = useTasks();

  const filtered = tasks.filter((t) => t.status === status);

  return (
    <div className="column">
      <h3>{title}</h3>

      {status === "todo" && <AddTask />}

      <div className="column-content">
        {filtered.map((task) => (
          <div key={task.id} className="task">
            {task.text}
          </div>
        ))}
      </div>
    </div>
  );
}