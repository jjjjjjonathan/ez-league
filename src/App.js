import logo from './logo.svg';
import './App.css';
import useApplicationData from './hooks/useApplicationData';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TestRoute from './components/TestRoute';

function App() {
  const { state } = useApplicationData();

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/routes">React Router Testing</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/routes">
          <TestRoute />
        </Route>
        <Route path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>Testing state in ez-league</p>
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
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
