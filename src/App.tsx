import './App.css';
import { TaskList } from './components/TaskList';

function App() {
  return (
    <main>
      <h1>Todo App</h1>
      <section>
        <h2>Tasks</h2>
        <form>
          <TaskList />
          <input
            type="text"
            name="task__input"
            id="task__input"
            className="task__input"
          />
          <input className="submit" type="submit" value="Add Task" />
        </form>
      </section>
    </main>
  );
}

export default App;
