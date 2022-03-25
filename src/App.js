import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestRoute from "./components/TestRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Standing from "./pages/Standing";
import TeamForm from "./components/TeamForm";
import MatchPage from "./components/MatchPage";
import CSVReader from "./components/CSVReader";
import AdminGame from "./pages/AdminGame";

function App() {
  const { state } = useApplicationData();
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
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
          <Route exact path="/matchpage">
            <MatchPage />
          </Route>
          <Route exact path="/parse">
            <CSVReader />
          </Route>
          <Route exact path="/admin/game/:fixture_id">
            <AdminGame />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
