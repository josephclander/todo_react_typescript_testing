import './App.css';

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <h2>Tasks</h2>
      <ul>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
        <li className="complete">Four</li>
      </ul>
      <button>Add Task</button>
    </>
  );
}

export default App;
