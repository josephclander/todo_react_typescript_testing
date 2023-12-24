// TaskList.tsx
import { Task, TaskProps } from "./Task";

type TaskListProps = {
  tasks: TaskProps[];
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) =>  void;
};

export const TaskList = ({ tasks, onToggleComplete, onDelete }: TaskListProps) => {
  const items = tasks.map((task) => (
    <Task key={task.id} {...task} onToggleComplete={onToggleComplete} onDelete={onDelete} />
  ));
  return <ul className="task__list">{items}</ul>;
};
