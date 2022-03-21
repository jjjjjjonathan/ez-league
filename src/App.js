import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [state, setState] = useState({});

  useEffect(() => {
    Promise.all([
      axios.get('/api/leagues'),
      axios.get('/api/leagues/1')
    ]).then((all) => {
      const [leagues, teams] = all;
      setState(prev => ({ ...prev, leagues, teams }));
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
