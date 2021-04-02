import logo from './logo.svg';
import './App.css';
import Hello from './views/hello';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hello />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
