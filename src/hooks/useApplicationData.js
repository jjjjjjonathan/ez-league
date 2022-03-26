import { useEffect, useState } from "react";
import axios from "axios";

const useApplicationData = () => {
  const [state, setState] = useState({
    leagues: [],
    teams: [],
    players: [],
    fixtures: [],
    fixtureEvents: [],
    fixtureTypes: [],
    sports: [],
    isReady: false
  });

  const setMultipleTeams = (teamsState, teamsArray) => {
    const newTeams = [...teamsState];
    teamsArray.forEach(newTeam => newTeams.push(newTeam));
    setState(prev => {
      return {
        ...prev,
        teams: newTeams
      };
    });
  };

  const updateFixtures = (oldFixturesArray, newFixtureObj) => {
    const newFixturesArray = oldFixturesArray.map(fixture => fixture.id === newFixtureObj.id ? newFixtureObj : fixture);
    setState(prev => {
      return {
        ...prev,
        fixtures: newFixturesArray
      };
    });
  };

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
        fixtureTypes: fixtureTypes.data,
        isReady: true
      }));
    });
  }, []);

  return { state, setState, setMultipleTeams, updateFixtures };
};

export default useApplicationData;