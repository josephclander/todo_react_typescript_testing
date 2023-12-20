import { Form } from '../components/Form';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Renders a form correctly', () => {
  afterEach(() => cleanup());
  it('renders a blank form when there are no tasks given', () => {
    render(<Form />);
    expect(
      screen.getByRole('textbox', { name: 'Task Input' })
    ).toBeInTheDocument();
  });
});
