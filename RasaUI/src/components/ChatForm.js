import React, { useState } from 'react';
import './ChatForm.css'; // Ensure this CSS file is in the same directory

const ChatForm = ({ onSubmit }) => {
  const [name, setName] = useState('');

  // Function to handle input change
  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (name.trim()) { // Check if the input is not empty
      onSubmit(name); // Pass the input value to the parent component
      setName(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="chat-form-container">
      <label htmlFor="nameInput">What's your name?</label>
      <input
        type="text"
        id="nameInput"
        placeholder="Type your name here..."
        value={name}
        onChange={handleInputChange}
        required
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default ChatForm;
