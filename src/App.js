import logo from './logo.svg';
import React from 'react';
import './App.css';
import DropdownMenu from './DropdownMenu';
import './DropdownMenu.css';
import Navbar from './NavBar';
import './NavBar.css';
import Modal from './Modal'
import ClassPicker from './ClassPicker'
import { useState } from 'react';
import './Modal.css';
import TermSelection from './TermSelection';
import ClearSearch from './ClearSearch';
import './ClearSearch.css';


function App() {
    const [openModal, setOpenModal] = useState(false);
  return (
    <div className="App" style={{ textAlign: 'left', marginLeft: '75px' }}>
      <h1>Hornet HQ</h1>
      <Navbar/>
      <div className="content-container">
      <h3>
        Preview Schedule
      </h3>
      <button className="openModalButton" 
      onClick={() => {
        setOpenModal(true);
      }}
    style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '20px',
      cursor: 'pointer',
      marginTop: '0px',
      border: '2px' 
    }}
  >
        Schedule
       </button>
       {openModal && <Modal closeModal={setOpenModal} />}
       </div>
       <TermSelection/>
      <DropdownMenu />
      <ClassPicker/>
      <ClearSearch/>


    </div>
  );
}

export default App;
