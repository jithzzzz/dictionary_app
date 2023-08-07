// SubmitButton.test.js
import { render, screen } from '@testing-library/react';
import React from 'react';
import SubmitButton from './SubmitButton';

test('renders submit button', () => {
  render(<SubmitButton onClick={() => {}} />);
  
  const buttonElement = screen.getByText(/Submit/i);
  expect(buttonElement).toBeInTheDocument();
});
