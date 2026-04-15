import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTask() {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Dodaj nowe zadanie..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit" className="add-btn">
        ✔
      </button>
    </form>
  );
}