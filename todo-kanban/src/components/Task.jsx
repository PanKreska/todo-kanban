import { useDraggable } from "@dnd-kit/core";
import { useTasks } from "../context/TaskContext";
import { useState } from "react";
export default function Task({ task }) {
    const { deleteTask, updateTask } = useTasks();
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(task.text);

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
            {/* DRAG HANDLE */}
            <div {...listeners} {...attributes} className="drag-handle">
                ⠿⠿⠿
            </div>

            {/* TRYB EDYCJI */}
            {isEditing ? (
                <div className="edit-box">
                    <input
                        value={text}
                        autoFocus
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                updateTask(task.id, text);
                                setIsEditing(false);
                            }
                        }}
                    />

                    <button
                        className="save-btn"
                        onClick={(e) => {
                            e.stopPropagation();
                            updateTask(task.id, text);
                            setIsEditing(false);
                        }}
                    >
                        ✔
                    </button>
                </div>
            ) : (
                <span onClick={() => setIsEditing(true)}>{task.text}</span>
            )}

            {/* DELETE */}
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
