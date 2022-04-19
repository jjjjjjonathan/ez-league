import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import socketIoClient from 'socket.io-client';

const useApplicationData = () => {

  const reducers = {
    'SET_APPLICATION_DATA'(state2, action) {
      return {
        ...state2,
        sports: action.sports.data,
        leagues: action.leagues.data,
        teams: action.teams.data,
        players: action.players.data,
        fixtures: action.fixtures.data,
        fixtureEvents: action.fixtureEvents.data,
        fixtureTypes: action.fixtureTypes.data,
        isReady: true,
      };
    },

    'CREATE_NEW_LEAGUE'(state2, action) {
      return {
        ...state2,
        leagues: [...state2.leagues, action.content]
      };
    },

    'UPDATE_FIXTURES'(state2, action) {
      const updateFixtures2 = (oldFixturesArray, newFixtureObj) => {
        const newFixturesArray = oldFixturesArray.map((fixture) =>
          fixture.id === newFixtureObj.id ? newFixtureObj : fixture
        );
        return newFixturesArray;
      };
      return {
        ...state2,
        fixtures: updateFixtures2(state2.fixtures, action.content)
      };
    },

    'INSERT_FIXTURE_EVENTS'(state2, action) {
      const newFixtureEventsArray = [...state2.fixtureEvents, action.content];
      return {
        ...state2,
        fixtureEvents: newFixtureEventsArray
      };
    },

    'EDIT_FIXTURE_EVENTS'(state2, action) {
      const editedFixtureEventsArray = state2.fixtureEvents.map((fixtureEvent) => fixtureEvent.id === action.content.id ? action.content : fixtureEvent);
      return {
        ...state2,
        fixtureEvents: editedFixtureEventsArray
      };
    },

    'DELETE_FIXTURE_EVENTS'(state2, action) {
      const updatedFixtureEventsArray = state2.fixtureEvents.filter((fixtureEvent) => fixtureEvent.id !== action.content.id);
      return {
        ...state2,
        fixtureEvents: updatedFixtureEventsArray
      };
    },

    'GENERATE_NEW_FIXTURES'(state2, action) {
      const updatedFixturesState = [...state2.fixtures];
      action.content.forEach(newFixture =>
        updatedFixturesState.push(newFixture)
      );
      return {
        ...state2,
        fixtures: updatedFixturesState
      };
    },

    'ADD_NEW_TEAMS'(state2, action) {
      const teamsArrayCopy = [...state2.teams];
      action.content.forEach(newTeam => teamsArrayCopy.push(newTeam));
      return {
        ...state2,
        teams: teamsArrayCopy
      };
    },

    'ADD_NEW_PLAYERS'(state2, action) {
      const playersArrayCopy = [...state2.players];
      action.content.forEach(newPlayer => playersArrayCopy.push(newPlayer));
      return {
        ...state2,
        players: playersArrayCopy
      };
    },

    'UPDATE_TEAMS_RESULTS'(state2, action) {
      return {
        ...state2,
        teams: state2.teams.map(team => team.id === action.content.id ? action.content : team)
      };
    }
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state2, dispatch] = useReducer(reducer, {
    leagues: [],
    teams: [],
    players: [],
    fixtures: [],
    fixtureEvents: [],
    fixtureTypes: [],
    sports: [],
    isReady: false,
  });






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
      // setState((prev) => ({
      //   ...prev,
      //   sports: sports.data,
      //   leagues: leagues.data,
      //   teams: teams.data,
      //   players: players.data,
      //   fixtures: fixtures.data,
      //   fixtureEvents: fixtureEvents.data,
      //   fixtureTypes: fixtureTypes.data,
      //   isReady: true,
      // }));
      dispatch({
        type: 'SET_APPLICATION_DATA',
        sports,
        leagues,
        teams,
        players,
        fixtures,
        fixtureEvents,
        fixtureTypes,
      });
    });
  }, []);

  useEffect(() => {
    const ENDPOINT = 'http://localhost:8001';
    const connection = socketIoClient(ENDPOINT);

    connection.on('UPDATESTATE', (data) => {
      dispatch({ type: data.type, content: data.content });
    });

  }, []);

  return {
    state: state2,
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
