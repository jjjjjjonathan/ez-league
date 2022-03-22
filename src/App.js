import logo from './logo.svg';
import './App.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
import useApplicationData from './hooks/useApplicationData';

function App() {

  const { state } = useApplicationData();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Testing state in ez-league
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
