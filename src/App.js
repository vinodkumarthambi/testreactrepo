import logo from './logo.svg';
import './App.css';
import Hello2 from './Component/Hello2';
import Hello1 from './Component/Hello1';
import Hello from './Component/Hello';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React */}
        {/* </a>
      </header> */}
      <Hello2 />
      <Hello1 />
      <Hello />
    </div>
  );
}

export default App;
