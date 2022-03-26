import { useEffect, useState } from "react";
import ScoreBoard from "../components/GameAdmin/ScoreBoard";
import Timer from "../components/GameAdmin/Timer";
import GameConsole from "../components/GameAdmin/GameConsole";
import EventTable from "../components/GameAdmin/EventTable";
import Players from "../components/GameAdmin/Players";
import { useParams } from "react-router-dom";
import axios from "axios";
import { GiJetPack } from "react-icons/gi";
// import useAdminGameHooks from "../hooks/useAdminGameHooks";
// import useApplicationData from "../hooks/useApplicationData";

const AdminGame = (props) => {
  //fetch fixture data and store it into a state
  const { state, updateFixtures } = props;

  //param to check fixture_id
  let { fixture_id } = useParams();

  // const { homeScore, awayScore, updateHomeGoals } = useAdminGameHooks(fixture_id, state.fixtures);

  const eventsInGame = state.fixtureEvents.filter(event => event.fixture_id === parseInt(fixture_id, 10));

  const fixture = state.fixtures.find(
    (fixture) => fixture.id === parseInt(fixture_id, 10)
  );
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

  //set home and away state team
  const [home, setHome] = useState({ ...homeTeam, score: fixture.home_team_score, players: homePlayers });
  const [away, setAway] = useState({ ...awayTeam, score: fixture.away_team_score, players: awayPlayers });

  //set state for timer
  const [timer, setTimer] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0
  });



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

  // useEffect for timer

  useEffect(() => {
    if (fixture.status === "First Half") {
      const timer1 = setInterval(() => {
        let minutes = 0;
        let seconds = Math.floor((Date.now() - Date.parse(fixture.first_half_start_time)) / 1000);
        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }
        setTime({
          minutes,
          seconds
        });
        if (minutes === 45 || fixture.status === "Halftime") {
          clearInterval(timer1);
        }
      }, 1000);
    }
    if (fixture.status === "Second Half") {
      const timer1 = setInterval(() => {
        let minutes = 0;
        let seconds = Math.floor((Date.now() - Date.parse(fixture.second_half_start_time)) / 1000) + 2700;
        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }
        setTime({
          minutes,
          seconds
        });


        if (minutes === 90 || fixture.status === "Final") {
          clearInterval(timer1);
        }
      }, 1000);
    }
  }, [fixture.status, fixture.first_half_start_time, fixture.second_half_start_time]);


  // useEffect(() => {
  //   //find the fixture that match with fixture_id



  //   const gameEvents = state.fixtureEvents.filter(
  //     (fixtureEvent) => fixtureEvent.fixture_id === parseInt(fixture_id)
  //   );

  //   console.log("this is game event ****", gameEvents);

  //   //find team id that match with team id in fixtures and set it for home and away
  //   // const homeTeam = state.teams.find(
  //   //   (team) => team.id === fixture.home_team_id
  //   // );
  //   // const awayTeam = state.teams.find(
  //   //   (team) => team.id === fixture.away_team_id
  //   // );
  //   // const homePlayers = state.players.filter(
  //   //   (player) => player.team_id === fixture.home_team_id
  //   // );
  //   // const awayPlayers = state.players.filter(
  //   //   (player) => player.team_id === fixture.away_team_id
  //   // );
  //   //need to fix

  //   //update state for home and away team data
  //   // if (homePlayers) {
  //   //   setHome({
  //   //     ...homeTeam,
  //   //     score: fixture.home_team_score,
  //   //     players: homePlayers,
  //   //   });
  //   // }
  //   // if (awayPlayers) {
  //   // }
  //   // setAway({
  //   //   ...awayTeam,
  //   //   score: fixture.away_team_score,
  //   //   players: awayPlayers,
  //   // });
  //   // setEvent([...gameEvents]);

  //   // const parseTime = Math.floor(
  //   //   (Date.now() - Date.parse(fixture.scheduled_time)) / (1000 * 60)
  //   // );

  //   const parseTime = Math.floor(
  //     Date.parse(fixture.scheduled_time) / (1000 * 60)
  //   );

  //   const eventTime = Math.floor(
  //     (Date.parse(gameEvents.time) - Date.parse(fixture.scheduled_time)) /
  //     (1000 * 60)
  //   );
  //   // }

  //   //timer set initial interval to null
  //   let interval = null;

  //   //check if state is true and set timer to run and else timer to stop
  //   if (timerOn) {
  //     interval = setInterval(() => {
  //       setTimer((prev) => prev + 10);
  //       // setTimer((prev) => prev + parseTime);
  //     }, 10);
  //   } else {
  //     clearInterval(interval);
  //   }
  //   //clean up the state and set the watch for everytime change the state and time
  //   return () => clearInterval(interval, state);
  // }, [state, timerOn, fixture_id]);

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

  const startHalf1 = (fixtureId, string) => {
    return axios.put('/api/fixtures/start1', { fixtureId, string })
      .then(data => {
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const startHalf2 = (fixtureId, string) => {
    return axios.put('/api/fixtures/start2', { fixtureId, string })
      .then(data => {
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const updateGoalHome = (fixtureId, number) => {
    setHome((prev) => {
      return { ...prev, score: prev.score + number < 0 ? 0 : prev.score + number };
    });

    return axios.put("/api/fixtures/homegoals", {
      score: number > 0 ? home.score + 1 : (home.score - 1 < 0 ? 0 : home.score - 1),
      fixtureId,
    })
      .then(data => {
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const updateGoalAway = (fixtureId, number) => {
    setAway((prev) => {
      return { ...prev, score: prev.score + number < 0 ? 0 : prev.score + number };
    });
    return axios.put("/api/fixtures/awaygoals", {
      score: number > 0 ? away.score + 1 : (away.score - 1 < 0 ? 0 : away.score - 1),
      fixtureId,
    })
      .then(data => {
        updateFixtures(state.fixtures, data.data.rows[0]);
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
      {/* <section>
        <EventTable event={event} fixture={fixture} eventsInGame={eventsInGame} eventTypes={state.fixtureTypes} teams={state.teams} players={state.players} key={eventsInGame.id} />
      </section> */}
      <section>
        <Players home={home} away={away} event={event} />
      </section>
      <section>
        <Timer timer={timer} onStart={startTimer} onStop={stopTimer} time={time} startHalf1={startHalf1} startHalf2={startHalf2} fixtureId={parseInt(fixture_id, 10)} />
      </section>
    </main>
  );
};

export default AdminGame;
