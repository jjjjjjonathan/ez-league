import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import TableList from "./component/TableList";
import TableListItem from "./component/TableListItem";

const team = [
  {
    id: 2,
    league_id: 1,
    name: "Manchester City",
    thumbnail_logo:
      "https://resources.premierleague.com/premierleague/badges/25/t43.png",
    goals_for: 93,
    goals_against: 29,
    wins: 28,
    draws: 5,
    losses: 5,
    points: 89,
    goal_difference: 64,
  },
  {
    id: 3,
    league_id: 1,
    name: "Manchester United",
    thumbnail_logo:
      "https://resources.premierleague.com/premierleague/badges/25/t1.png",
    goals_for: 89,
    goals_against: 33,
    wins: 28,
    draws: 5,
    losses: 5,
    points: 89,
    goal_difference: 56,
  },
];

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    Promise.all([axios.get("/api/leagues"), axios.get("/api/leagues/1")]).then(
      (all) => {
        const [leagues, teams] = all;
        setState((prev) => ({ ...prev, leagues, teams }));
      }
    );
  }, []);

  // console.log("this is state", state.teams);
  // console.log("this is state JSON parse", JSON.parse(state.teams.data));
  return <TableList teams={team} />;
  // return <h1>Hello</h1>;
}

export default App;
