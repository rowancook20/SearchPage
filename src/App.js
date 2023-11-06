import logo from './logo.svg';
import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu';
import SubjectDropdown from './SubjectDropdown';
import Navbar from './NavBar';
import './NavBar.css';
import ClassPicker from './ClassPicker';




function App() {
  return (
    <div className="App">
      <h1>Hornet HQ</h1>
      <Navbar/>
      <DropdownMenu />
      <SubjectDropdown />
      <ClassPicker />

    </div>
  );
}

export default App;
