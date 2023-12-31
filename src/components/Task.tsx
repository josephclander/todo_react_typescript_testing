// Task.tsx
export type TaskProps = {
  id: string;
  task: string;
  complete: boolean;
};

type TaskComponentProps = TaskProps & {
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
};

export const Task = ({
  id,
  task,
  complete,
  onToggleComplete,
  onDelete,
}: TaskComponentProps) => {
  const handleToggle = () => onToggleComplete(id);
  const handleDelete = () => onDelete(id);

  const completeStyle = complete ? "complete" : "";

  return (
    <li className="task__container">
      <button type="button" onClick={handleDelete} className="delete">
        X
      </button>
      <span tabIndex={0} onClick={handleToggle} className={`task ${completeStyle}`}>
        {task}
      </span>
    </li>
  );
};
