// CustomLabelInput.js
import React, { useState } from 'react';

function TextInput({ labelText, isRequired, onInputChange }) {
  // State to store the input value
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    // Call the callback function with the new input value
    onInputChange(newValue);
  };
  let val = labelText.length * 10
  // Function to split the labelText into individual characters
  const generateLabel = () => {
    return labelText.split('').map((char, index) => (
      <span key={index} style={{ transitionDelay: `${index * 10}ms` }}>
        {char}
      </span>
    ));
  };

  // Add red star if the field is required
  const renderRequiredStar = () => {
    if (isRequired) {
      return <span style={{ color: 'red', transitionDelay: `${val}ms` }}>*</span>;
    }
    return null;
  };

  return (
    <div className="form-control">
      {/* Bind input value to state and call handleChange on input change */}
      <input type="text" value={inputValue} onChange={handleChange} required={isRequired} />
      <label>{generateLabel()} {renderRequiredStar()}</label>
    </div>
  );
}

export default TextInput;
