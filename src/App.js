import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [state, setState] = useState({
    leagues: [],
    teams: [],
    players: [],
    fixtures: [],
    fixtureEvents: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/leagues'),
      axios.get('/api/teams'),
      axios.get('/api/players'),
      axios.get('/api/fixtures'),
      axios.get('/api/fixtures/events')
    ]).then((all) => {
      const [leagues, teams, players, fixtures, fixtureEvents] = all;
      setState(prev => ({ ...prev, leagues: leagues.data, teams: teams.data, players: players.data, fixtures: fixtures.data, fixtureEvents: fixtureEvents.data }));
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
