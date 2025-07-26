import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Your React App/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders counter component', () => {
  render(<App />);
  const counterElement = screen.getByText(/Current count:/i);
  expect(counterElement).toBeInTheDocument();
});