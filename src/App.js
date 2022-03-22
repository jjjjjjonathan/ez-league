import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Standing from "./page/Standing";
import Home from "./page/Home";

function App() {
  const [state, setState] = useState({
    leagues: [],
    teams: [],
  });

  useEffect(() => {
    Promise.all([axios.get("/api/leagues"), axios.get("/api/leagues/1")]).then(
      (all) => {
        const [leagues, teams] = all;
        setState((prev) => ({
          ...prev,
          leagues: leagues.data,
          teams: teams.data,
        }));
      }
    );
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/standing">
            <Standing teams={state.teams} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
