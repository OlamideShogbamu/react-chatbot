import React, { useState, useEffect } from 'react';

const OptionButtons = ({ onOptionSelected }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const response = await fetch('https://your-api-endpoint.com/options');
        const data = await response.json();
        setOptions(data);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleOptionClick = (option) => {
    onOptionSelected(option);
  };

  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => handleOptionClick(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default OptionButtons;