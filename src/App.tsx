import './App.css';

function App() {
  return (
    <main>
      <h1>Todo App</h1>
      <section>
        <h2>Tasks</h2>
        <ul>
          <li className="task__container">
            <button className="delete">X</button><span className="task">One</span>
          </li>
          <li className="task__container">
            <button className="delete">X</button><span className="task">Two</span>
          </li>
          <li className="task__container">
            <button className="delete">X</button><span className="task">Three</span>
          </li>
          <li className="task__container">
            <button className="delete">X</button><span className="task complete">Four</span>
          </li>
        </ul>
        <button className="submit">Add Task</button>
      </section>
    </main>
  );
}

export default App;
