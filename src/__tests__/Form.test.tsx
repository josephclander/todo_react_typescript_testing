import { Form } from "../components/Form";
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
});
