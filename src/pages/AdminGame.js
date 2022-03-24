import { useEffect, useState } from "react";
import ScoreBoard from "../components/GameAdmin/ScoreBoard";
import Timer from "../components/GameAdmin/Timer";
import GameConsole from "../components/GameAdmin/GameConsole";
import EventTable from "../components/GameAdmin/EventTable";
import { useParams } from "react-router-dom";
import useApplicationData from "../hooks/useApplicationData";

const AdminGame = (props) => {
  //fetch fixture data and store it into a state
  const { state } = useApplicationData();
  //param to check fixture_id
  let { fixture_id } = useParams();

  //set home and away state team
  const [home, setHome] = useState({});
  const [away, setAway] = useState({});

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

  useEffect(() => {
    //find the fixture that match with fixture_id
    const fixture = state.fixtures.find(
      (fixture) => fixture.id === parseInt(fixture_id)
    );

    //update state for home and away team data
    if (fixture) {
      //find team id that match with team id in fixtures and set it for home and away
      const homeTeam = state.teams.find(
        (team) => team.id === fixture.home_team_id
      );
      const awayTeam = state.teams.find(
        (team) => team.id === fixture.away_team_id
      );

      const gameEvents = state.fixtureEvents.filter(
        (fixtureEvent) => fixtureEvent.fixture_id === parseInt(fixture_id)
      );

      setHome({ ...homeTeam, score: fixture.home_team_score });
      setAway({ ...awayTeam, score: fixture.home_team_score });

      if (gameEvents) {
        setEvent([...gameEvents]);
      }

      console.log("this is gameEvents *****", gameEvents);
    }

    //timer set initial interval to null
    let interval = null;
    //check if state is true and set timer to run and else timer to stop
    if (timerOn) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 10);
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
        team: "HOME",
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
        <EventTable event={event} />
      </section>
      <section>
        <Timer timer={timer} onStart={startTimer} onStop={stopTimer} />
      </section>
    </main>
  );
};

export default AdminGame;
