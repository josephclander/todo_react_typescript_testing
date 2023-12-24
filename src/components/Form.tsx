// Form.tsx
import { ChangeEvent, FormEvent, useState, useRef } from "react";
import { TaskList } from "./TaskList";
import { TaskProps } from "./Task";

export const Form = () => {
  const [input, setInput] = useState<string>("");
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

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
    inputRef.current?.focus(); // bring focus back to the input
  };

  const handleComplete = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, complete: !task.complete } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <form onSubmit={handleAddTask}>
      <TaskList
        tasks={tasks}
        onToggleComplete={handleComplete}
        onDelete={handleDelete}
      />
      <label htmlFor="task__input">Task Input</label>
      <input
        type="text"
        name="task__input"
        id="task__input"
        className="task__input"
        value={input}
        onChange={handleInput}
      />
      <input ref={inputRef} className="submit" type="submit" value="Add Task" />
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
