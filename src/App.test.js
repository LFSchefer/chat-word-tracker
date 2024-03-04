import { render, screen } from '@testing-library/react';
import App from './App';

test('renders page', () => {
  render(<App />);
  const header = screen.getByText('Twitch chat word tracker');
  const wordTracker = screen.getByText('Words to track:');
  expect(header).toBeInTheDocument();
  expect(wordTracker).toBeInTheDocument();
});
