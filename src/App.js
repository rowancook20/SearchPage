import logo from './logo.svg';
import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu';
import SubjectDropdown from './SubjectDropdown';
import Navbar from './NavBar';




function App() {
  return (
    <div className="App">
      <h1>Hornet HQ</h1>
      <h2>General Search</h2>
      <Navbar/>
      <DropdownMenu />
      <SubjectDropdown />

    </div>
  );
}

export default App;
