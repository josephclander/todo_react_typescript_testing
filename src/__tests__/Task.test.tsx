import { Task } from '../components/Task';
import { render, screen, cleanup } from '@testing-library/react';

describe('Renders a task correctly', () => {
  afterEach(() => {
    cleanup();
  });
  it('render the text given in props', () => {
    const mockTask = 'Complete homework';
    render(<Task task={mockTask} />);
    expect(screen.getByText(mockTask)).not.toBeNull();
  });
});
