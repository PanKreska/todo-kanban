import Column from "./components/Column";

function App() {
  return (
    <div className="app">
      <h1>Kanban Board</h1>

      <div className="board">
        <Column title="Do zrobienia" />
        <Column title="W trakcie" />
        <Column title="Zrobione" />
      </div>
    </div>
  );
}

export default App;