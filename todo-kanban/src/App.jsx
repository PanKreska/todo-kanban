import Column from "./components/Column";
import { TaskProvider } from "./context/TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Kanban Board</h1>

        <div className="board">
          <Column title="Do zrobienia" status="todo" />
          <Column title="W trakcie" status="doing" />
          <Column title="Zrobione" status="done" />
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;