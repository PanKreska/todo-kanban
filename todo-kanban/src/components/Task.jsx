import { useDraggable } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
export default function Task({ task }) {
    const { deleteTask } = useTasks();

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: task.id,
    });

    const style = {
        transform: transform
            ? `translate(${transform.x}px, ${transform.y}px)`
            : undefined,
    };

    return (
        <div ref={setNodeRef} style={style} className="task">
            <div {...listeners} {...attributes} className="drag-handle">
                ⠿⠿⠿
            </div>

            <span>{task.text}</span>

            <button
                className="delete-btn"
                onClick={(e) => {
                    e.stopPropagation();
                    deleteTask(task.id);
                }}
            >
                ❌
            </button>
        </div>
    );
}
