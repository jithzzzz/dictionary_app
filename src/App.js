import React, { useState } from 'react';
import './App.css';

function App() {
  const [word, setWord] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();

      if (Array.isArray(data)) {
        const wordDefinitions = data[0]?.meanings.map((meaning) => meaning.definitions[0]?.definition);
        setDefinitions(wordDefinitions || []);
      } else {
        setError('Word not found');
        setDefinitions([]);
      }
    } catch (error) {
      setError('An error occurred');
      setDefinitions([]);
    }
  };

  return (
    <div className="App">
      <h1 className="text-3xl font-semibold mb-4">Dictionary App</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      {error && <p className="error">{error}</p>}
      {definitions.length > 0 && (
        <ul className="definition-list">
          {definitions.map((definition, index) => (
            <li key={index} className="definition-item">
              {definition}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
