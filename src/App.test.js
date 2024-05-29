/* eslint-disable testing-library/await-async-query */
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
// import Select from 'react-select';
import selectEvent from "react-select-event";

import { ReactSelectForm } from "./ReactSelectForm";


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

test('select the number of chanels', () => {
  render(<App />);
  const randomNumb = Math.floor(Math.random() * 4 + 1);
  fireEvent.change(screen.getByTitle('chat-number'), { target: { value: randomNumb } });
  // selectEvent.select(screen.getByLabelText("Number of Twitch chat to track:"), `${randomNumb}`);

  selectEvent.select(screen.getByLabelText("Number of Twitch chat to track:"), [randomNumb]);
  const inputChanel = screen.queryAllByPlaceholderText(/mistermv/i);
  // expect(inputChanel).toHaveLength(randomNumb);
  expect(screen.getByLabelText("Number of Twitch chat to track:")).toHaveValue(`${[randomNumb]}`)
});

test('connect to a chanel', () => {
  render(<App />);
  userEvent.type(screen.getByPlaceholderText('Ex: mistermv'), 'jossBergia');
  expect(screen.getByPlaceholderText("Ex: mistermv")).toHaveValue("jossBergia");
  const connectBtn = screen.getByText(/Connect/i);
  fireEvent.click(connectBtn);
  const liveTchat = screen.getByText(/Live tchat:/i);
  expect(liveTchat).toBeInTheDocument();
  expect(liveTchat).toHaveTextContent(/jossBergia/i);
  expect(screen.getByText(/Clear/i)).toBeVisible();
  expect(screen.getByText(/Disconnect/i)).toBeVisible();
});
