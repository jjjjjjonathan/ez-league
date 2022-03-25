import { useEffect, useState } from "react";
import ScoreBoard from "../components/GameAdmin/ScoreBoard";
import Timer from "../components/GameAdmin/Timer";
import GameConsole from "../components/GameAdmin/GameConsole";
import EventTable from "../components/GameAdmin/EventTable";
import Players from "../components/GameAdmin/Players";
import { useParams } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";

const AdminGame = (props) => {
  //fetch fixture data and store it into a state
  const state = props.state;

  //param to check fixture_id
  let { fixture_id } = useParams();

  //set home and away state team
  const [home, setHome] = useState({});
  const [away, setAway] = useState({});

  //set state for timer
  const [timer, setTimer] = useState({ minutes: 0, seconds: 0 });
  const [timerOn, setTimerOn] = useState(false);
  const [timeMinutes, setTimeMinutes] = useState(0);
  const [timeSeconds, setTimeSeconds] = useState(0);

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
    setHome({
      ...homeTeam,
      score: fixture.home_team_score,
      players: homePlayers,
    });
    setAway({
      ...awayTeam,
      score: fixture.home_team_score,
      players: awayPlayers,
    });
    setEvent([...gameEvents]);

    // const parseTime = Math.floor(
    //   (Date.now() - Date.parse(fixture.scheduled_time)) / (1000 * 60)
    // );

    const parseTime = Math.floor(
      (Date.now() - Date.parse(fixture.scheduled_time)) / 1000
    );

    const eventTime = Math.floor(
      (Date.parse(gameEvents.time) - Date.parse(fixture.scheduled_time)) /
        (1000 * 60)
    );
    // }

    //timer set initial interval to null

    // const countUpDate = new Date().getTime();

    // interval = setInterval(() => {
    //   const now = new Date().getTime();
    //   const distance = countUpDate + now;
    //   const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
    //   const seconds = Math.floor((distance % (60 * 1000)) / (1000 * 60));
    // });

    //check if state is true and set timer to run and else timer to stop
    // if (timerOn) {
    //   interval = setInterval(() => {
    //     setTimer((prev) => prev + 10);
    //     // setTimer((prev) => prev + parseTime);
    //   }, 1000);
    // } else {
    //   clearInterval(interval);
    // }
    timeRun();

    //clean up the state and set the watch for everytime change the state and time
    // return () => clearInterval(interval, state);
    // state, timerOn, fixture_id
  }, [timerOn]);

  const timeRun = () => {
    let interval = null;
    const countUpDate = new Date().getTime();
    console.log("countUpdate*****", countUpDate);
    if (timerOn) {
      interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countUpDate + now;
        const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
        const seconds = Math.floor((distance % (60 * 1000)) / (1000 * 60));
        setTimeMinutes(minutes);
        setTimeSeconds(seconds);
        // setTimer({ minutes: minutes, seconds: seconds });
      }, 1000);
    } else {
      clearInterval(interval);
    }
  };

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

  const updateAway = () => {
    setAway((prev) => {
      return { ...prev, score: prev.score + 1 };
    });
    setEvent((prev) => [
      ...prev,

      {
        team: away.name,
        time: Math.floor(timer / 60000),
        event: "GOAL",
        player: "jesus",
      },
    ]);
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
          updateHome={updateHome}
          updateAway={updateAway}
        />
      </section>
      <section>
        <EventTable event={event} fixture={fixture} />
      </section>
      <section>
        <Players home={home} away={away} event={event} />
      </section>
      <section>
        <Timer
          timer={timer}
          onStart={startTimer}
          onStop={stopTimer}
          minutes={timeMinutes}
          seconds={timeSeconds}
        />
      </section>
    </main>
  );
};

export default AdminGame;
