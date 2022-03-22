import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TestRoute from "./components/TestRoute";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Standing from "./pages/Standing";
import TeamForm from "./components/TeamForm";

function App() {
  const { state } = useApplicationData();

  return (
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
      </Switch>
    </Router>
  );
}

export default App;
