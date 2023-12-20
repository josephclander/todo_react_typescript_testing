import { TaskList } from './TaskList';

export const Form = () => {
  const mockTasks = [
    { id: 1, task: 'Complete homework', complete: false },
    { id: 2, task: 'Clean the house', complete: true },
  ];

  return (
    <form>
      <TaskList tasks={[]} />
      <label htmlFor="task__input">Task Input</label>
      <input
        type="text"
        name="task__input"
        id="task__input"
        className="task__input"
      />
      <input className="submit" type="submit" value="Add Task" />
    </form>
  );
};
