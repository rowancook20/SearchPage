import React, { useState } from 'react';

function Major() {
  // State to keep track of the selected term
  const [selectedTerm, setSelectedTerm] = useState('');

  // Define the terms as options
  const terms = ['Computer Science', 'Psychology'];

  // Event handler for when a term is selected
  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <div>
      <select value={selectedTerm} onChange={handleTermChange}>
        <option value="">Major</option>
        {terms.map((term, index) => (
          <option key={index} value={term}>
            {term}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Major;