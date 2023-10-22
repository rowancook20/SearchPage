import React, { useState } from 'react';

function Concentration() {
  // State to keep track of the selected term
  const [selectedTerm, setSelectedTerm] = useState('');

  // Define the terms as options
  const terms = ['Neuroscience'];

  // Event handler for when a term is selected
  const handleTermChange = (event) => {
    setSelectedTerm(event.target.value);
  };

  return (
    <div>
      <select value={selectedTerm} onChange={handleTermChange}>
        <option value="">Concentration</option>
        {terms.map((term, index) => (
          <option key={index} value={term}>
            {term}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Concentration;