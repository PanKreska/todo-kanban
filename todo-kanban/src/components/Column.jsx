import { useTasks } from "../context/TaskContext";
import AddTask from "./AddTask";
import { useDroppable } from "@dnd-kit/core";
import Task from "./Task";
export default function Column({ title, status }) {
    const { tasks } = useTasks();
    const { setNodeRef } = useDroppable({
        id: status,
    });
    const filtered = tasks.filter((t) => t.status === status);

    return (
        <div className="column" ref={setNodeRef}>
            <h3>{title}</h3>
            <div className="column-content">
                {filtered.map((task) => (
                    <Task key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
}
