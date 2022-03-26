import { useEffect, useState } from "react";
import ScoreBoard from "../components/GameAdmin/ScoreBoard";
import Timer from "../components/GameAdmin/Timer";
import GameConsole from "../components/GameAdmin/GameConsole";
import EventTable from "../components/GameAdmin/EventTable";
import Players from "../components/GameAdmin/Players";
import { useParams } from "react-router-dom";
import axios from "axios";
// import useApplicationData from "../hooks/useApplicationData";

const AdminGame = (props) => {
  //fetch fixture data and store it into a state
  const { state } = props;

  //param to check fixture_id
  let { fixture_id } = useParams();

  //set home and away state team
  const [home, setHome] = useState({ score: 0, players: [] });
  const [away, setAway] = useState({ score: 0, players: [] });

  //set state for timer
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  //set state for every event
  const [event, setEvent] = useState([
    {
      team: null,
      time: null,
      event: null,
      player: null,
      score: 0,
    },
  ]);

  const fixture = state.fixtures.find(
    (fixture) => fixture.id === parseInt(fixture_id)
  );

  useEffect(() => {
    //find the fixture that match with fixture_id

    const gameEvents = state.fixtureEvents.filter(
      (fixtureEvent) => fixtureEvent.fixture_id === parseInt(fixture_id)
    );

    console.log("this is game event ****", gameEvents);

    //find team id that match with team id in fixtures and set it for home and away
    const homeTeam = state.teams.find(
      (team) => team.id === fixture.home_team_id
    );
    const awayTeam = state.teams.find(
      (team) => team.id === fixture.away_team_id
    );
    const homePlayers = state.players.filter(
      (player) => player.team_id === fixture.home_team_id
    );
    const awayPlayers = state.players.filter(
      (player) => player.team_id === fixture.away_team_id
    );
    //need to fix

    //update state for home and away team data
    if (homePlayers) {
      setHome({
        ...homeTeam,
        score: fixture.home_team_score,
        players: homePlayers,
      });
    }
    if (awayPlayers) {
    }
    setAway({
      ...awayTeam,
      score: fixture.away_team_score,
      players: awayPlayers,
    });
    setEvent([...gameEvents]);

    // const parseTime = Math.floor(
    //   (Date.now() - Date.parse(fixture.scheduled_time)) / (1000 * 60)
    // );

    const parseTime = Math.floor(
      Date.parse(fixture.scheduled_time) / (1000 * 60)
    );

    const eventTime = Math.floor(
      (Date.parse(gameEvents.time) - Date.parse(fixture.scheduled_time)) /
        (1000 * 60)
    );
    // }

    //timer set initial interval to null
    let interval = null;

    //check if state is true and set timer to run and else timer to stop
    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
        // setTimer((prev) => prev + parseTime);
      }, 10);
    } else {
      clearInterval(interval);
    }
    //clean up the state and set the watch for everytime change the state and time
    return () => clearInterval(interval, state);
  }, [state, timerOn, fixture_id]);

  //function to set timer to true and false
  const startTimer = () => {
    setTimerOn(true);
  };
  const stopTimer = () => {
    setTimerOn(false);
  };

  //function to update event
  const updateHome = () => {
    setHome((prev) => {
      return { ...prev, score: prev.score + 1 };
    });
    setEvent((prev) => [
      ...prev,

      {
        team: home.name,
        time: Math.floor(timer / 60000),
        event: "GOAL",
        player: "Werner",
      },
    ]);
  };

  // const updateGoalHome = (score, fixtureId) => {
  //   setHome((prev) => {
  //     return { ...prev, score: prev.score + 1 };
  //   });

  //   return axios.put("/api/fixtures/homegoals", { score, fixtureId });

  //   // setEvent((prev) => [
  //   //   ...prev,

  //   //   {
  //   //     team: away.name,
  //   //     time: Math.floor(timer / 60000),
  //   //     event: "GOAL",
  //   //     player: "jesus",
  //   //   },
  //   // ]);
  // };

  const updateGoalHome = (fixtureId) => {
    setHome((prev) => {
      return { ...prev, score: prev.score + 1 };
    });

    return axios.put("/api/fixtures/homegoals", {
      score: home.score + 1,
      fixtureId,
    });
  };

  const updateGoalAway = (fixtureId) => {
    setAway((prev) => {
      return { ...prev, score: prev.score + 1 };
    });
    return axios.put("/api/fixtures/awaygoals", {
      score: away.score + 1,
      fixtureId,
    });
  };
  return (
    <main>
      <section>
        <ScoreBoard home={home} away={away} event={event} />
      </section>
      <section>
        <GameConsole
          home={home}
          away={away}
          updateGoalHome={updateGoalHome}
          updateGoalAway={updateGoalAway}
          fixtureId={fixture.id}
        />
      </section>
      <section>
        <EventTable event={event} fixture={fixture} />
      </section>
      <section>
        <Players home={home} away={away} event={event} />
      </section>
      <section>
        <Timer timer={timer} onStart={startTimer} onStop={stopTimer} />
      </section>
    </main>
  );
};

export default AdminGame;
