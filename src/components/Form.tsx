import { TaskList } from './TaskList';

export const Form = () => {
  return (
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
  );
};
