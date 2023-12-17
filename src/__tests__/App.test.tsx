// import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App';

describe('Renders main page correctly', async () => {
  afterEach(() => {
    cleanup();
  });
  it('should render the main page correctly', async () => {
    render(<App />);
    const h1 = await screen.queryByText('Todo App');
    expect(h1).not.toBeNull();
  });
});
