export type TaskProps = {
  id: string;
  task: string;
  complete: boolean;
};



export const Task = ({ task, complete }: TaskProps) => {
  const completeStyle = complete ? 'complete' : '';
  return (
    <li className="task__container">
      <button className="delete">X</button>
      <span className={`task ${completeStyle}`}>{task}</span>
    </li>
  );
};
