// Api.test.js
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import React from 'react';
import App from './App';
import { server } from './mocks/server';

test('displays definitions for a valid word', async () => {
  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/Enter a word/i);
  const submitButton = screen.getByText(/Submit/i);
  
  fireEvent.change(inputElement, { target: { value: 'dog' } });
  fireEvent.click(submitButton);
  
  await waitFor(() => {
    const definition1 = screen.getByText(/Definition 1/i);
    expect(definition1).toBeInTheDocument();
  });
});

test('displays error message for non-existent word', async () => {
  server.use(
    rest.get('https://api.dictionaryapi.dev/api/v2/entries/en/:word', (req, res, ctx) => {
      return res(
        ctx.status(404),
        ctx.json({ message: 'Word not found' })
      );
    })
  );

  render(<App />);
  
  const inputElement = screen.getByPlaceholderText(/Enter a word/i);
  const submitButton = screen.getByText(/Submit/i);
  
  fireEvent.change(inputElement, { target: { value: 'nonexistentword' } });
  fireEvent.click(submitButton);
  
  const errorMessage = await screen.findByText(/Word not found/i);
  expect(errorMessage).toBeInTheDocument();
});
