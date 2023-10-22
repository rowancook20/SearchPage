import logo from './logo.svg';
import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu';
import SubjectDropdown from './SubjectDropdown';
import Major from './Major';
import Minor from './Minor';
import Concentration from './Concentration';



function App() {
  return (
    <div className="App">
      <h1>Hornet HQ</h1>
      <Major/>
      <Minor/>
      <Concentration/>

      <h2>Catalog Advanced Search</h2>

      <DropdownMenu />
      <SubjectDropdown />

    </div>
  );
}

export default App;
