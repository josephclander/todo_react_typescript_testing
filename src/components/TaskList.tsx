// TaskList.tsx
import { Task, TaskProps } from "./Task";

export type TaskListProps = {
  tasks: TaskProps[];
  onToggleComplete: (id: string) => void;
};

export const TaskList = ({ tasks, onToggleComplete }: TaskListProps) => {
  const items = tasks.map((task) => (
    <Task key={task.id} {...task} onToggleComplete={onToggleComplete} />
  ));
  return <ul className="task__list">{items}</ul>;
};
