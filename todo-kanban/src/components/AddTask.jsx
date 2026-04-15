import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export default function AddTask() {
  const { addTask } = useTasks();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dodaj nowe zadanie i naciśnij Enter..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}