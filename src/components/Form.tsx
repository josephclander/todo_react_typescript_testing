// Form.tsx
import { ChangeEvent, FormEvent, useState } from "react";
import { TaskList } from "./TaskList";
import { TaskProps } from "./Task";

export const Form = () => {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleAddTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!input.trim()) return; // Prevent adding empty tasks

    const newTask = {
      id: generateUUID(),
      task: input,
      complete: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const handleComplete = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <form onSubmit={handleAddTask}>
      <TaskList tasks={tasks} onToggleComplete={handleComplete} />
      <label htmlFor="task__input">Task Input</label>
      <input
        type="text"
        name="task__input"
        id="task__input"
        className="task__input"
        value={input}
        onChange={handleInput}
      />
      <input className="submit" type="submit" value="Add Task" />
    </form>
  );
};

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
