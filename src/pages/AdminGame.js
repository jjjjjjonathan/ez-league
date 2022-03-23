import Team from "../components/GameAdmin/Team";
import { useState } from "react";
import ScoreBoard from "../components/GameAdmin/ScoreBoard";

const AdminGame = (props) => {
  const [home, setHome] = useState({
    id: 1,
    league_id: 1,
    name: "Chelsea",
    thumbnail_logo:
      "https://resources.premierleague.com/premierleague/badges/25/t8.png",
    score: 0,
  });

  const [away, setAway] = useState({
    id: 2,
    league_id: 1,
    name: "Manchester City",
    thumbnail_logo:
      "https://resources.premierleague.com/premierleague/badges/25/t43.png",
    score: 0,
  });

  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  return <ScoreBoard home={home} away={away} timer={timer} />;
};

export default AdminGame;
