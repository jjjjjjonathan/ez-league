import "./App.css";
import useApplicationData from "./hooks/useApplicationData";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import LeagueStanding from "./pages/LeagueStanding";
import TeamForm from "./components/TeamForm";
import MatchPage from "./components/MatchPage";
import CSVReader from "./components/CSVReader";
import LeagueForm2 from "./components/LeagueForm/index";
import LeagueHome from "./pages/LeagueHome";
import Loading from "./components/Loading";
import AdminGame from "./pages/AdminGame";
import DashBoard from "./components/Dashboard";
import TeamDashboard from "./components/TeamDashboard";
import LeagueList from "./components/LeagueList";
import LeaguePlayers from "./pages/LeaguePlayers";
import LeagueResults from "./pages/LeagueResults";
import UpcomingSchedule from "./pages/UpcomingSchedule";
import TeamProfile from "./pages/TeamProfile";

function App() {
  const {
    state,
    setState,
    setMultipleTeams,
    updateFixtures,
    newFixturesEvent,
    updateFixturesEvent,
    deleteFixtureEvent,
    updateMultipleTeam,
    set1Player,
    addNewFixtures,
    setMultiplePlayers
  } = useApplicationData();

  return !state.isReady ? (
    <Loading />
  ) : (
    <div className="min-h-screen flex-grow bg-gray-300 font-sans font-semibold ">
      <Router>
        <Navbar />
        <div className="min-h-screen">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/leagues/:id/admin">
              <DashBoard
                leagues={state.leagues}
                teams={state.teams}
                fixtures={state.fixtures}
                setMultipleTeams={setMultipleTeams}
                addNewFixtures={addNewFixtures}
              />
            </Route>
            <Route exact path="/teams/:id/admin">
              <TeamDashboard players={state.players} set1Player={set1Player} teams={state.teams} setMultiplePlayers={setMultiplePlayers} />
            </Route>

            <Route
              exact
              path="/leagues"
              children={<LeagueList leagues={state.leagues} />}
            />
            <Route
              exact
              path="/leagues/:id"
              children={<LeagueHome state={state} setState={setState} />}
            />
            <Route
              exact
              path="/leagues/team/:id"
              children={<TeamProfile state={state} />}
            />
            <Route exact path="/leagues/:id/table">
              <LeagueStanding teams={state.teams} />
            </Route>
            <Route exact path="/leagues/:id/players">
              <LeaguePlayers players={state.players} teams={state.teams} />
            </Route>
            <Route exact path="/leagues/:id/schedule">
              <UpcomingSchedule fixtures={state.fixtures} teams={state.teams} />
            </Route>
            <Route exact path="/leagues/:id/results">
              <LeagueResults fixtures={state.fixtures} teams={state.teams} />
            </Route>
            <Route exact path="/teamform">
              <TeamForm />
            </Route>
            <Route exact path="/matchpage/:id">
              <MatchPage
                fixtures={state.fixtures}
                teams={state.teams}
                players={state.players}
                state={state}
                fixtureEvents={state.fixtureEvents}
              />
            </Route>
            <Route exact path="/parse">
              <CSVReader />
            </Route>
            <Route exact path="/leagueform">
              <LeagueForm2 state={state} setState={setState} />
            </Route>
            <Route exact path="/admin/game/:fixture_id">
              <AdminGame
                state={state}
                updateFixtures={updateFixtures}
                newFixturesEvent={newFixturesEvent}
                updateFixturesEvent={updateFixturesEvent}
                deleteFixtureEvent={deleteFixtureEvent}
                updateMultipleTeam={updateMultipleTeam}
              />
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
