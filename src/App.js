import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';
import { useReducer } from 'react';
import {reducer, initialState} from './utils/CheckLogin'


function App() {

  
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
