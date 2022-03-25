import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Standing from "./pages/Standing";
import TeamForm from "./components/TeamForm";
import CSVReader from "./components/CSVReader";
import LeagueForm2 from "./components/LeagueForm/index";
import LeagueHome from "./pages/LeagueHome";
import Loading from "./components/Loading";

function App() {
  const { state, setState } = useApplicationData();
  return !state.isReady ? <Loading /> : (
    <div className="h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <Router>
        <Navbar />
        <div className="container mx-auto">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/leagues/:id" children={<LeagueHome state={state} setState={setState} />} />
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
              <LeagueForm2 state={state} setState={setState} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
