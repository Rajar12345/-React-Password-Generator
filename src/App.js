import React, { useState } from 'react';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [numberOfPasswords, setNumberOfPasswords] = useState(100);
  const [passwords, setPasswords] = useState([]);

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleNumberOfPasswordsChange = (e) => {
    const value = parseInt(e.target.value);
    setNumberOfPasswords(value);
  };

  const generatePassword = () => {
    // Implement your password generation logic here
    // For simplicity, let's just generate random passwords
    const generatedPasswords = [];
    for (let i = 0; i < numberOfPasswords; i++) {
      const randomPassword = Math.random().toString(36).slice(2);
      // Append or prepend the keyword to the random password
      const relatedPassword = `${randomPassword}${keyword}${randomPassword}`;
      generatedPasswords.push(relatedPassword);
    }
    setPasswords(generatedPasswords);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Random Password Generator</h1>
      </div>
      <div className="input-group">
        <label htmlFor="keyword">Enter a keyword:</label>
        <input type="text" id="keyword" value={keyword} onChange={handleKeywordChange} />
      </div>
      <div className="input-group">
        <label htmlFor="numberOfPasswords">Select number of passwords to generate:</label>
        <input
          type="number"
          id="numberOfPasswords"
          value={numberOfPasswords}
          min={100}
          max={10000}
          onChange={handleNumberOfPasswordsChange}
        />
      </div>
      <div className="input-group">
        <button className="generateBtn" onClick={generatePassword}>Generate Passwords</button>
      </div>
      <div className="passwords-list">
        <h2>Generated Passwords:</h2>
        <ul>
          {passwords.map((password, index) => (
            <li key={index}>{password}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
