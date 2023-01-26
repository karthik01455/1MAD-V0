import React from 'react';
import Navbar from './components/navBar';
import PoNotesHeader from './components/poNotesHeader';
import PoNotesBody from './components/poNotesBody';
import './App.css';

function App() {
  return (
    <div>
      <div> <Navbar /> </div>
      <div> <PoNotesHeader /> </div>
      <div> <PoNotesBody /> </div>
    </div>
  );
}

export default App;
