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
      axios.get('/api/sports'),
      axios.get('/api/leagues'),
      axios.get('/api/teams'),
      axios.get('/api/players'),
      axios.get('/api/fixtures'),
      axios.get('/api/fixtures/events'),
      axios.get('/api/fixtures/types')
    ]).then((all) => {
      const [sports, leagues, teams, players, fixtures, fixtureEvents, fixtureTypes] = all;
      setState(prev => ({
        ...prev,
        sports: sports.data,
        leagues: leagues.data,
        teams: teams.data,
        players: players.data,
        fixtures: fixtures.data,
        fixtureEvents: fixtureEvents.data,
        fixtureTypes: fixtureTypes.data
      }));
    });
  }, []);

  return { state };
};

export default useApplicationData;