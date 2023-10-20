import logo from './logo.svg';
import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu';
import SubjectDropdown from './SubjectDropdown';



function App() {
  return (
    <div className="App">
      <h1>Hornet HQ</h1>

      <h2>Catalog Advanced Search</h2>

      <DropdownMenu />
      <SubjectDropdown />

    </div>
  );
}

export default App;
