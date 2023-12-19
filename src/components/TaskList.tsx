import { Task, TaskProps } from './Task';

export type TaskListProps = {
  tasks: TaskProps[];
};

export const TaskList = ({ tasks }: TaskListProps) => {
  const items = tasks.map((taskData) => (
    <Task key={taskData.id} {...taskData} />
  ));
  return <ul className="task__list">{items}</ul>;
};
