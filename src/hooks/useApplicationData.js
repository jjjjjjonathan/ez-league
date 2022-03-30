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
    isReady: false,
  });

  const addNewFixtures = (fixturesState, newFixturesArray) => {
    const updatedFixturesState = [...fixturesState];
    newFixturesArray.forEach((newFixture) =>
      updatedFixturesState.push(newFixture)
    );
    setState((prev) => {
      return {
        ...prev,
        fixtures: updatedFixturesState,
      };
    });
  };

  const setMultipleTeams = (teamsState, teamsArray) => {
    const newTeams = [...teamsState];
    teamsArray.forEach((newTeam) => newTeams.push(newTeam));
    setState((prev) => {
      return {
        ...prev,
        teams: newTeams,
      };
    });
  };

  const updateMultipleTeam = (oldTeamState, newTeam1, newTeam2) => {
    const updateTeamsArray1 = oldTeamState.map((team) =>
      team.id === newTeam1.id ? newTeam1 : team
    );
    const updateTeamArray2 = updateTeamsArray1.map((team) =>
      team.id === newTeam2.id ? newTeam2 : team
    );

    setState((prev) => {
      return {
        ...prev,
        teams: updateTeamArray2,
      };
    });
  };

  const set1Player = (playersState, newPlayerObj) => {
    const newPlayersArray = [...playersState, newPlayerObj];
    setState((prev) => {
      return {
        ...prev,
        players: newPlayersArray,
      };
    });
  };

  const setMultiplePlayers = (playersState, newPlayersArray) => {
    const updatedPlayersArray = playersState;
    newPlayersArray.forEach(player => updatedPlayersArray.push(player));
    setState(prev => {
      return {
        ...prev,
        players: updatedPlayersArray
      };
    });
  };

  const updateFixtures = (oldFixturesArray, newFixtureObj) => {
    const newFixturesArray = oldFixturesArray.map((fixture) =>
      fixture.id === newFixtureObj.id ? newFixtureObj : fixture
    );
    setState((prev) => {
      return {
        ...prev,
        fixtures: newFixturesArray,
      };
    });
  };

  const newFixturesEvent = (fixtureEventsState, newEventObject) => {
    const newFixturesEvents = [...fixtureEventsState, newEventObject];
    setState((prev) => {
      return {
        ...prev,
        fixtureEvents: newFixturesEvents,
      };
    });
  };

  const updateFixturesEvent = (oldFixtureEventsArray, newFixtureEventObj) => {
    const newFixtureEventsArray = oldFixtureEventsArray.map((fixtureEvent) =>
      fixtureEvent.id === newFixtureEventObj.id
        ? newFixtureEventObj
        : fixtureEvent
    );
    setState((prev) => {
      return {
        ...prev,
        fixtureEvents: newFixtureEventsArray,
      };
    });
  };

  const deleteFixtureEvent = (
    oldFixtureEventsArray,
    deletedFixtureEventObj
  ) => {
    const updatedFixtureEventsArray = oldFixtureEventsArray.filter(
      (fixtureEvent) => fixtureEvent.id !== deletedFixtureEventObj.id
    );
    setState((prev) => {
      return {
        ...prev,
        fixtureEvents: updatedFixtureEventsArray,
      };
    });
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/sports"),
      axios.get("/api/leagues"),
      axios.get("/api/teams"),
      axios.get("/api/players"),
      axios.get("/api/fixtures"),
      axios.get("/api/fixtures/events"),
      axios.get("/api/fixtures/types"),
    ]).then((all) => {
      const [
        sports,
        leagues,
        teams,
        players,
        fixtures,
        fixtureEvents,
        fixtureTypes,
      ] = all;
      setState((prev) => ({
        ...prev,
        sports: sports.data,
        leagues: leagues.data,
        teams: teams.data,
        players: players.data,
        fixtures: fixtures.data,
        fixtureEvents: fixtureEvents.data,
        fixtureTypes: fixtureTypes.data,
        isReady: true,
      }));
    });
  }, []);

  return {
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
  };
};

export default useApplicationData;
