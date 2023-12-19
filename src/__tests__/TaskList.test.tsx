import { TaskList } from '../components/TaskList';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Renders a task list correctly', () => {
  afterEach(() => cleanup());
  it('renders without crashing', () => {
    render(<TaskList tasks={[]} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
  it('renders no Task components when there are no tasks', () => {
    render(<TaskList tasks={[]} />);
    const taskItems = screen.queryAllByRole('listitem');
    expect(taskItems.length).toBe(0);
  });

  it('should renders one Task component when there is one task', () => {
    const mockTaskList1 = [{ id: 1, task: 'Complete homework', complete: false }];
    render(<TaskList tasks={mockTaskList1} />);
    const taskItems = screen.queryAllByRole('listitem');
    expect(taskItems.length).toBe(1);
  });
  it('should renders two Task components when there are two tasks', () => {
    const mockTaskList2 = [
        { id: 1, task: 'Complete homework', complete: false },
        { id: 2, task: 'Clean the house', complete: true },
    ];
    render(<TaskList tasks={mockTaskList2} />);
    const taskItems = screen.queryAllByRole('listitem');
    expect(taskItems.length).toBe(2);
  });
});
