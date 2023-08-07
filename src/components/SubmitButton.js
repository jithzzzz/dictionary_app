// SubmitButton.js
import React from 'react';

function SubmitButton({ onClick }) {
  return (
    <button type="button" className="submit-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:border-blue-300"
 onClick={onClick}>
      Submit
    </button>
  );
}

export default SubmitButton;
