import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
