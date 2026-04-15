import Column from "./components/Column";
import AddTask from "./components/AddTask";
import { TaskProvider } from "./context/TaskContext";
import { DndContext } from "@dnd-kit/core";
import { useTasks } from "./context/TaskContext";

function AppContent() {
    const { moveTask } = useTasks();

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over) return;

        const taskId = active.id;
        const newStatus = over.id;

        moveTask(taskId, newStatus);
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="app">
                <h1>Kanban Board</h1>
                <AddTask />

                <div className="board">
                    <Column title="Do zrobienia" status="todo" />
                    <Column title="W trakcie" status="doing" />
                    <Column title="Zrobione" status="done" />
                </div>
            </div>
        </DndContext>
    );
}
function App() {
    return (
        <TaskProvider>
            <AppContent />
        </TaskProvider>
    );
}
export default App;
