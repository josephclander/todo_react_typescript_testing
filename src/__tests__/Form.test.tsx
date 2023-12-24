import { Form } from "../components/Form";
import { Task } from "../components/Task";
import { fireEvent, render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Renders a form correctly", () => {
  afterEach(() => cleanup());
  it("renders a blank form when there are no tasks given", () => {
    render(<Form />);
    expect(
      screen.getByRole("textbox", { name: "Task Input" })
    ).toBeInTheDocument();
  });
  it("updates input field on user input", () => {
    render(<Form />);
    const input = screen.getByRole("textbox", {
      name: "Task Input",
    }) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "New Task" } });
    expect(input.value).toBe("New Task");
  });
  it("adds a new task on form submission", () => {
    render(<Form />);
    const input = screen.getByRole("textbox", { name: "Task Input" });
    const submitButton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(submitButton);
    expect(screen.getByText("New Task")).toBeInTheDocument();
  });
  it("does not submit an empty task", () => {
    render(<Form />);
    const input = screen.getByRole("textbox", { name: "Task Input" });
    const submitButton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.change(input, { target: { value: " " } });
    fireEvent.click(submitButton);
    expect(screen.queryByText(" ")).not.toBeInTheDocument();
  });
  it("clears the input after submission", () => {
    render(<Form />);
    const input = screen.getByRole("textbox", {
      name: "Task Input",
    }) as HTMLInputElement;
    const submitButton = screen.getByRole("button", { name: "Add Task" });
    fireEvent.change(input, { target: { value: "Clear this field" } });
    fireEvent.click(submitButton);
    expect(input.value).toBe("");
  });
  it("click a task toggles complete", () => {
    const mockToggleComplete = vi.fn();
    const mockDelete = vi.fn();
    const mockTask = {
      id: "1",
      task: "Book flights",
      complete: false,
      onToggleComplete: mockToggleComplete,
      onDelete: mockDelete,
    };
    render(<Task {...mockTask} />);

    const taskElement = screen.getByText("Book flights");
    expect(taskElement).not.toHaveClass("complete");

    fireEvent.click(taskElement);
    expect(mockToggleComplete).toHaveBeenCalledWith("1");
  });
  it("removes a task from the list if clicked", () => {
    render(<Form />);
    const input = screen.getByLabelText("Task Input");

    // Add a task
    fireEvent.change(input, { target: { value: "Book flights" } });
    fireEvent.submit(screen.getByText("Add Task"));

    // Add another task
    fireEvent.change(input, { target: { value: "Clean kitchen" } });
    fireEvent.submit(screen.getByText("Add Task"));

    // Now delete the first task
    const deleteButtons = screen.queryAllByText("X");
    fireEvent.click(deleteButtons[0]); // click the first x button

    // Check if the task list does not contain the deleted task only
    expect(screen.queryByText("Book flights")).toBeNull();
    expect(screen.queryByText("Clean kitchen")).toBeInTheDocument();
  });
});
