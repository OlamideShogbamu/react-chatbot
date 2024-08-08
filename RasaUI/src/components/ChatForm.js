// ChatForm.js
import React, { useState } from 'react';
import './ChatForm.css'; // Import the corresponding CSS file

const ChatForm = () => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the name to a server)
    console.log('Submitted name:', name);
  };

  return (
    <div className="chat-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">What's your name?</label>
        <input
          type="text"
          id="nameInput"
          placeholder="Type your name here..."
          value={name}
          onChange={handleNameChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatForm;
