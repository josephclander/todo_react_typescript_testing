import { Task } from '../components/Task';
import { render, screen, cleanup } from '@testing-library/react';

describe('Renders a task correctly', () => {
  afterEach(() => {
    cleanup();
  });
  it('render the text given in props', () => {
    const mockTask = { id: '1', task: 'Complete homework', complete: false };
    render(
      <Task
        id={mockTask.id}
        task={mockTask.task}
        complete={mockTask.complete}
      />
    );
    expect(screen.getByText(mockTask.task)).not.toBeNull();
  });
  it('An incomplete task does not include "complete" in className list', () => {
    const mockTask1 = { id: '1', task: 'Complete homework', complete: false };
    render(
      <Task
        id={mockTask1.id}
        task={mockTask1.task}
        complete={mockTask1.complete}
      />
    );
    const task1Element = screen.getByText(mockTask1.task);
    expect(task1Element).toBeTruthy();
    expect(task1Element.className.includes('complete')).toBe(false);
  });
  it('A complete task includes "complete" in className list', () => {
    const mockTask2 = { id: '1', task: 'Clean the house', complete: true };
    render(
      <Task
        id={mockTask2.id}
        task={mockTask2.task}
        complete={mockTask2.complete}
      />
    );
    const task2Element = screen.getByText(mockTask2.task);
    expect(task2Element).toBeTruthy();
    expect(task2Element.className.includes('complete')).toBe(true);
  });
});
