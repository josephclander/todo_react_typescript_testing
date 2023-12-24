// Task.tsx
export type TaskProps = {
  id: string;
  task: string;
  complete: boolean;
};

type TaskComponentProps = TaskProps & {
  onToggleComplete: (id: string) => void;
};

export const Task = ({ id, task, complete, onToggleComplete }: TaskComponentProps) => {
  const handleToggle = () => onToggleComplete(id);

  const completeStyle = complete ? "complete" : "";

  return (
    <li className="task__container">
      <button className="delete">X</button>
      <span onClick={handleToggle} className={`task ${completeStyle}`}>
        {task}
      </span>
    </li>
  );
};
