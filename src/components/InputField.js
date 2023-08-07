// InputField.js
import React from 'react';

function InputField({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Enter a word"
      value={value}
      onChange={onChange}
      className="form-input border p-2 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
    />
  );
}

export default InputField;
