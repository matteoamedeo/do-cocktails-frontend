import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      {/* <div className='App-sub'> */}
      <NavBar />
      <Content />

      {/* </div> */}
    </div>
  );
}

export default App;
