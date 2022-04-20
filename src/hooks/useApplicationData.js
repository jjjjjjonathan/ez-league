import { useEffect, useReducer } from "react";
import axios from "axios";
import socketIoClient from 'socket.io-client';

const useApplicationData = () => {

  const reducers = {
    'SET_APPLICATION_DATA'(state, action) {
      return {
        ...state,
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

    'CREATE_NEW_LEAGUE'(state, action) {
      return {
        ...state,
        leagues: [...state.leagues, action.content]
      };
    },

    'UPDATE_FIXTURES'(state, action) {
      const updateFixtures = (oldFixturesArray, newFixtureObj) => {
        const newFixturesArray = oldFixturesArray.map((fixture) =>
          fixture.id === newFixtureObj.id ? newFixtureObj : fixture
        );
        return newFixturesArray;
      };
      return {
        ...state,
        fixtures: updateFixtures(state.fixtures, action.content)
      };
    },

    'INSERT_FIXTURE_EVENTS'(state, action) {
      const newFixtureEventsArray = [...state.fixtureEvents, action.content];
      return {
        ...state,
        fixtureEvents: newFixtureEventsArray
      };
    },

    'EDIT_FIXTURE_EVENTS'(state, action) {
      const editedFixtureEventsArray = state.fixtureEvents.map((fixtureEvent) => fixtureEvent.id === action.content.id ? action.content : fixtureEvent);
      return {
        ...state,
        fixtureEvents: editedFixtureEventsArray
      };
    },

    'DELETE_FIXTURE_EVENTS'(state, action) {
      const updatedFixtureEventsArray = state.fixtureEvents.filter((fixtureEvent) => fixtureEvent.id !== action.content.id);
      return {
        ...state,
        fixtureEvents: updatedFixtureEventsArray
      };
    },

    'GENERATE_NEW_FIXTURES'(state, action) {
      const updatedFixturesState = [...state.fixtures];
      action.content.forEach(newFixture =>
        updatedFixturesState.push(newFixture)
      );
      return {
        ...state,
        fixtures: updatedFixturesState
      };
    },

    'ADD_NEW_TEAMS'(state, action) {
      const teamsArrayCopy = [...state.teams];
      action.content.forEach(newTeam => teamsArrayCopy.push(newTeam));
      return {
        ...state,
        teams: teamsArrayCopy
      };
    },

    'ADD_NEW_PLAYERS'(state2, action) {
      const playersArrayCopy = [...state.players];
      action.content.forEach(newPlayer => playersArrayCopy.push(newPlayer));
      return {
        ...state,
        players: playersArrayCopy
      };
    },

    'UPDATE_TEAMS_RESULTS'(state, action) {
      return {
        ...state,
        teams: state.teams.map(team => team.id === action.content.id ? action.content : team)
      };
    }
  };

  const reducer = (state, action) => {
    return reducers[action.type](state, action) || state;
  };

  const [state, dispatch] = useReducer(reducer, {
    leagues: [],
    teams: [],
    players: [],
    fixtures: [],
    fixtureEvents: [],
    fixtureTypes: [],
    sports: [],
    isReady: false,
  });

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

  return { state };
};

export default useApplicationData;
