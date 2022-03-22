import { useEffect, useState } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    leagues: [],
    teams: [],
    players: [],
    fixtures: [],
    fixtureEvents: []
  });

  useEffect(() => {
    Promise.all([
      axios.get('/api/leagues'),
      axios.get('/api/teams'),
      axios.get('/api/players'),
      axios.get('/api/fixtures'),
      axios.get('/api/fixtures/events')
    ]).then((all) => {
      const [leagues, teams, players, fixtures, fixtureEvents] = all;
      setState(prev => ({ ...prev, leagues: leagues.data, teams: teams.data, players: players.data, fixtures: fixtures.data, fixtureEvents: fixtureEvents.data }));
    });
  }, []);

  return { state };
};

export default useApplicationData;