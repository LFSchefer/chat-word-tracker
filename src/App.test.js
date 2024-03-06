import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('renders page', () => {
  render(<App />);
  const header = screen.getByText('Twitch chat word tracker');
  const wordTracker = screen.getByText('Words to track:');
  expect(header).toBeInTheDocument();
  expect(wordTracker).toBeInTheDocument();
});

test('enter a chanel chanel', () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Ex: mistermv'), 'jossBergia');
  expect(screen.getByPlaceholderText("Ex: mistermv")).toHaveValue("jossBergia");
});

test('connect to a chanel', () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Ex: mistermv'), 'jossBergia');
  expect(screen.getByPlaceholderText("Ex: mistermv")).toHaveValue("jossBergia");
  const connectBtn = screen.getByText(/Connect/i);
  fireEvent.click(connectBtn);
  const liveTchat = screen.getByText(/Live tchat:/i);
  expect(liveTchat).toBeInTheDocument();
  expect(liveTchat).toHaveTextContent(/jossBergia/i)
});
