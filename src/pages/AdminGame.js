import { useEffect, useState } from "react";
import ScoreBoard from "../components/GameAdmin/ScoreBoard";
import Timer from "../components/GameAdmin/Timer";
import GameConsole from "../components/GameAdmin/GameConsole";
import EventTable from "../components/GameAdmin/EventTable";
import { useParams } from "react-router-dom";
import axios from "axios";
// import useAdminGameHooks from "../hooks/useAdminGameHooks";
// import useApplicationData from "../hooks/useApplicationData";

const AdminGame = (props) => {
  //fetch fixture data and store it into a state
  const {
    state,
    updateFixtures,
    newFixturesEvent,
    updateFixturesEvent,
    deleteFixtureEvent,
    updateMultipleTeam,
  } = props;

  //param to check fixture_id
  const { fixture_id } = useParams();

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
    if (fixture.status === "First Half") {
      setTimerOn(true);
      timer1 = setInterval(() => {
        let minutes = 0;
        let seconds = Math.floor(
          (Date.now() - Date.parse(fixture.first_half_start_time)) / 1000 + 1
        );
        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }
        setTime({
          minutes,
          seconds,
        });
        if (minutes === 45 || fixture.status === "Halftime") {
          setTimerOn(false);
        }
      }, 1000);
    }
    let timer2;

    if (fixture.status === "Second Half") {
      setTimerOn(true);
      timer2 = setInterval(() => {
        let minutes = 0;
        let seconds =
          Math.floor(
            (Date.now() - Date.parse(fixture.second_half_start_time)) / 1000
          ) + 2701;

        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }

        setTime({
          minutes,
          seconds,
        });

        if (minutes === 90 || fixture.status === "Final") {
          // clearInterval(timer1);
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
    const string = halftime ? "Halftime" : "Final";
    return axios
      .put("/api/fixtures/end", { fixtureId, string })
      .then((data) => {
        setTimerOn(false);
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const startHalf1 = (fixtureId, string) => {
    return axios
      .put("/api/fixtures/start1", { fixtureId, string })
      .then((data) => {
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const startHalf2 = (fixtureId, string) => {
    return axios
      .put("/api/fixtures/start2", { fixtureId, string })
      .then((data) => {
        console.log(data);
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const updateGoalHome = (fixtureId, number) => {
    setHome((prev) => {
      return {
        ...prev,
        score: prev.score + number < 0 ? 0 : prev.score + number,
      };
    });

    return axios
      .put("/api/fixtures/homegoals", {
        score:
          number > 0 ? home.score + 1 : home.score - 1 < 0 ? 0 : home.score - 1,
        fixtureId,
      })
      .then((data) => {
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const updateGoalAway = (fixtureId, number) => {
    setAway((prev) => {
      return {
        ...prev,
        score: prev.score + number < 0 ? 0 : prev.score + number,
      };
    });
    return axios
      .put("/api/fixtures/awaygoals", {
        score:
          number > 0 ? away.score + 1 : away.score - 1 < 0 ? 0 : away.score - 1,
        fixtureId,
      })
      .then((data) => {
        updateFixtures(state.fixtures, data.data.rows[0]);
      });
  };

  const updateHomeGoalEvent = (fixtureId, teamId, half) => {
    return axios
      .put("/api/fixtures/new_home_goal", {
        fixtureId,
        teamId,
        time: "NOW()",
        type: 1,
        half,
      })
      .then((data) => {
        newFixturesEvent(state.fixtureEvents, data.data.rows[0]);
      });
  };

  const updateAwayGoalEvent = (fixtureId, teamId, half) => {
    return axios
      .put("/api/fixtures/new_away_goal", {
        fixtureId,
        teamId,
        time: "NOW()",
        type: 1,
        half,
      })
      .then((data) => {
        newFixturesEvent(state.fixtureEvents, data.data.rows[0]);
      });
  };

  const updateHomeYellowEvent = (fixtureId, teamId, half) => {
    return axios
      .put("/api/fixtures/yellow_home_card", {
        fixtureId,
        teamId,
        time: "NOW()",
        type: 3,
        half,
      })
      .then((data) => {
        newFixturesEvent(state.fixtureEvents, data.data.rows[0]);
      });
  };

  const updateHomeRedEvent = (fixtureId, teamId, half) => {
    return axios
      .put("/api/fixtures/red_home_card", {
        fixtureId,
        teamId,
        time: "NOW()",
        type: 4,
        half,
      })
      .then((data) => {
        newFixturesEvent(state.fixtureEvents, data.data.rows[0]);
      });
  };

  const updateAwayYellowEvent = (fixtureId, teamId, half) => {
    return axios
      .put("/api/fixtures/yellow_away_card", {
        fixtureId,
        teamId,
        time: "NOW()",
        type: 3,
        half,
      })
      .then((data) => {
        newFixturesEvent(state.fixtureEvents, data.data.rows[0]);
      });
  };

  const updateAwayRedEvent = (fixtureId, teamId, half) => {
    return axios
      .put("/api/fixtures/red_away_card", {
        fixtureId,
        teamId,
        time: "NOW()",
        type: 4,
        half,
      })
      .then((data) => {
        newFixturesEvent(state.fixtureEvents, data.data.rows[0]);
      });
  };

  return (
    <main>
      <section>
        <ScoreBoard home={home} away={away} timer={time} />
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
          fixtureId={fixture.id}
          firstHalfTime={fixture.first_half_start_time}
          fixtureEvents={state.fixtureEvents}
          eventTypes={state.fixtureTypes}
          teams={state.teams}
          players={state.players}
          fixtureStatus={fixture.status}
          secondHalfTime={fixture.second_half_start_time}
          updateFixturesEvent={updateFixturesEvent}
          admin={true}
          deleteFixtureEvent={deleteFixtureEvent}
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
          updateMultipleTeam={updateMultipleTeam}
        />
      </section>
    </main>
  );
};

export default AdminGame;
