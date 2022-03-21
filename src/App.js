import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TableList from "./component/TableList";

function App() {
  const [state, setState] = useState({
    leagues: [],
    teams: []
  });

  useEffect(() => {
    Promise.all([axios.get("/api/leagues"), axios.get("/api/leagues/1")]).then(
      (all) => {
        const [leagues, teams] = all;
        setState((prev) => ({ ...prev, leagues: leagues.data, teams: teams.data }));
      }
    );
  }, []);

  return <TableList teams={state.teams} />;
}

export default App;
