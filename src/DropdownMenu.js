import React, { useState } from 'react';

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <h2>Select a Term:</h2>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        <option value="Fall 2023">Fall 2023</option>
        <option value="Winter 2024">Winter 2024</option>
        <option value="Spring 2024">Spring 2024</option>
      </select>
      <p>You selected: {selectedOption}</p>
    </div>
  );
};

export default DropdownMenu;