type TaskProps = {
  task: string;
};

export const Task = ({ task }: TaskProps) => {
  return (
    <>
      <li className="task__container">
        <button className="delete">X</button>
        <span className="task complete">{task}</span>
      </li>
    </>
  );
};
