import React, { useState } from 'react';

function DropdownMenu() {
  // State to keep track of the selected term
  const [selectedTerm, setSelectedTerm] = useState('');

  // Define the terms as options
  const terms = ['Winter 2024', 'Spring 2024', 'Fall 2023'];

  // Event handler for when a term is selected
  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <div>
      <h2>Select a Term:</h2>
      <select value={selectedTerm} onChange={handleTermChange}>
        <option value="">Select a term</option>
        {terms.map((term, index) => (
          <option key={index} value={term}>
            {term}
          </option>
        ))}
      </select>
      {selectedTerm && (
        <p>You selected: {selectedTerm}</p>
      )}
    </div>
  );
}

export default DropdownMenu;