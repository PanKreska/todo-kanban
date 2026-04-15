import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem("tasks");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    const addTask = (text) => {
        const newTask = {
            id: Date.now(),
            text,
            status: "todo", // todo | doing | done
        };

        setTasks((prev) => [...prev, newTask]);
    };

    const moveTask = (id, newStatus) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, status: newStatus } : task,
            ),
        );
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const updateTask = (id, newText) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, text: newText } : task,
            ),
        );
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, moveTask, deleteTask, updateTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    return useContext(TaskContext);
}
