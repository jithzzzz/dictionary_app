// InputField.test.js
import { render, screen } from '@testing-library/react';
import React from 'react';
import InputField from './InputField';

test('renders input field', () => {
  render(<InputField value="" onChange={() => {}} />);
  
  const inputElement = screen.getByPlaceholderText(/Enter a word/i);
  expect(inputElement).toBeInTheDocument();
});
