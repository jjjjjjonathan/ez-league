import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestRoute from "./components/TestRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Standing from "./pages/Standing";
import TeamForm from "./components/TeamForm";
import CSVReader from "./components/CSVReader";
import LeagueForm from "./components/LeagueForm";

function App() {
  const { state } = useApplicationData();
  console.log(state);
  return (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/routes">
            <TestRoute />
          </Route>
          <Route exact path="/standing">
            <Standing teams={state.teams} />
          </Route>
          <Route exact path="/teamform">
            <TeamForm />
          </Route>
          <Route exact path="/parse">
            <CSVReader />
          </Route>
          <Route exact path="/leagueform">
            <LeagueForm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
