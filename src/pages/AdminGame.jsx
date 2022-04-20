import { useEffect, useState } from 'react';
import ScoreBoard from '../components/GameAdmin/ScoreBoard';
import Timer from '../components/GameAdmin/Timer';
import GameConsole from '../components/GameAdmin/GameConsole';
import EventTable from '../components/GameAdmin/EventTable';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import useAdminGameHooks from "../hooks/useAdminGameHooks";
// import useApplicationData from "../hooks/useApplicationData";

const AdminGame = (props) => {
  const adminClasses =
    'odd:bg-gray-100 even:bg-gray-200  duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer';
  //fetch fixture data and store it into a state
  const { state } = props;

  //param to check fixture_id
  const { fixture_id } = useParams();
  // const fixtureId = parseInt(fixture_id, 10);

  const fixture = state.fixtures.find(
    (fixture) => fixture.id === parseInt(fixture_id, 10)
  );
  const homeTeam = state.teams.find((team) => team.id === fixture.home_team_id);
  const awayTeam = state.teams.find((team) => team.id === fixture.away_team_id);
  const homePlayers = state.players.filter(
    (player) => player.team_id === fixture.home_team_id
  );
  const awayPlayers = state.players.filter(
    (player) => player.team_id === fixture.away_team_id
  );

  //set home and away state team
  const [home, setHome] = useState({
    ...homeTeam,
    score: fixture.home_team_score,
    players: homePlayers,
  });
  const [away, setAway] = useState({
    ...awayTeam,
    score: fixture.away_team_score,
    players: awayPlayers,
  });

  //set state for timer
  const [timerOn, setTimerOn] = useState(false);

  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  // useEffect for timer

  useEffect(() => {
    let timer1;
    if (fixture.status === 'First Half') {
      setTimerOn(true);
      timer1 = setInterval(() => {
        let minutes = 0;
        let seconds = Math.floor(
          (Date.now() - Date.parse(fixture.first_half_start_time)) / 1000
        );
        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }
        setTime({
          minutes,
          seconds,
        });
        if (minutes === 45 || fixture.status === 'Halftime') {
          setTimerOn(false);
        }
      }, 1000);
    }
    let timer2;

    if (fixture.status === 'Second Half') {
      setTimerOn(true);
      timer2 = setInterval(() => {
        let minutes = 0;
        let seconds =
          Math.floor(
            (Date.now() - Date.parse(fixture.second_half_start_time)) / 1000
          ) + 2700;

        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }

        setTime({
          minutes,
          seconds,
        });

        if (minutes === 90 || fixture.status === 'Final') {
          setTimerOn(false);
        }
      }, 1000);
    }

    if (!timerOn) {
      clearInterval(timer1);
      clearInterval(timer2);
    }

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [
    fixture.status,
    fixture.first_half_start_time,
    fixture.second_half_start_time,
    timerOn,
  ]);

  const startTimer = () => {
    setTimerOn(true);
  };
  const stopTimer = (fixtureId, halftime = false) => {
    const string = halftime ? 'Halftime' : 'Final';
    return axios
      .put('/api/fixtures/end', { fixtureId, string })
      .then((data) => {
        setTimerOn(false);
      });
  };

  const startHalf1 = (fixtureId, string) => {
    return axios.put('/api/fixtures/start1', { fixtureId, string });
  };

  const startHalf2 = (fixtureId, string) => {
    return axios.put('/api/fixtures/start2', { fixtureId, string });
  };

  const updateGoalHome = (fixtureId, number) => {
    setHome((prev) => {
      return {
        ...prev,
        score: prev.score + number < 0 ? 0 : prev.score + number,
      };
    });

    return axios.put('/api/fixtures/homegoals', {
      score:
        number > 0 ? home.score + 1 : home.score - 1 < 0 ? 0 : home.score - 1,
      fixtureId,
    });
  };

  const updateGoalAway = (fixtureId, number) => {
    setAway((prev) => {
      return {
        ...prev,
        score: prev.score + number < 0 ? 0 : prev.score + number,
      };
    });
    return axios.put('/api/fixtures/awaygoals', {
      score:
        number > 0 ? away.score + 1 : away.score - 1 < 0 ? 0 : away.score - 1,
      fixtureId,
    });
  };

  const updateHomeGoalEvent = (fixtureId, teamId, half) => {
    return axios.put('/api/fixtures/new_home_goal', {
      fixtureId,
      teamId,
      time: 'NOW()',
      type: 1,
      half,
    });
  };

  const updateAwayGoalEvent = (fixtureId, teamId, half) => {
    return axios.put('/api/fixtures/new_away_goal', {
      fixtureId,
      teamId,
      time: 'NOW()',
      type: 1,
      half,
    });
  };

  const updateHomeYellowEvent = (fixtureId, teamId, half) => {
    return axios.put('/api/fixtures/yellow_home_card', {
      fixtureId,
      teamId,
      time: 'NOW()',
      type: 3,
      half,
    });
  };

  const updateHomeRedEvent = (fixtureId, teamId, half) => {
    return axios.put('/api/fixtures/red_home_card', {
      fixtureId,
      teamId,
      time: 'NOW()',
      type: 4,
      half,
    });
  };

  const updateAwayYellowEvent = (fixtureId, teamId, half) => {
    return axios.put('/api/fixtures/yellow_away_card', {
      fixtureId,
      teamId,
      time: 'NOW()',
      type: 3,
      half,
    });
  };

  const updateAwayRedEvent = (fixtureId, teamId, half) => {
    return axios.put('/api/fixtures/red_away_card', {
      fixtureId,
      teamId,
      time: 'NOW()',
      type: 4,
      half,
    });
  };

  return (
    <main>
      <section>
        <ScoreBoard
          home={home}
          away={away}
          timer={time}
          homeScore={fixture.home_team_score}
          awayScore={fixture.away_team_score}
        />
      </section>
      <section className="mt-4">
        <GameConsole
          home={home}
          away={away}
          updateGoalHome={updateGoalHome}
          updateGoalAway={updateGoalAway}
          fixtureId={fixture.id}
          homeGoalEvent={updateHomeGoalEvent}
          awayGoalEvent={updateAwayGoalEvent}
          homeRedEvent={updateHomeRedEvent}
          homeYellowEvent={updateHomeYellowEvent}
          awayRedEvent={updateAwayRedEvent}
          awayYellowEvent={updateAwayYellowEvent}
        />
      </section>
      <section className="mx-auto">
        <EventTable
          classes={adminClasses}
          fixtureId={fixture.id}
          firstHalfTime={fixture.first_half_start_time}
          fixtureEvents={state.fixtureEvents}
          eventTypes={state.fixtureTypes}
          teams={state.teams}
          players={state.players}
          fixtureStatus={fixture.status}
          secondHalfTime={fixture.second_half_start_time}
          admin={true}
        />
      </section>
      <section>
        <Timer
          onStart={startTimer}
          onStop={stopTimer}
          time={time}
          startHalf1={startHalf1}
          startHalf2={startHalf2}
          fixtureId={parseInt(fixture_id, 10)}
          fixture={fixture}
          teams={state.teams}
          home={homeTeam}
          away={awayTeam}
          fixtures={state.fixtures}
        />
      </section>
    </main>
  );
};

export default AdminGame;
