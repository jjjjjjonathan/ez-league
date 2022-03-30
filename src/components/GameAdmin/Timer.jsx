import axios from "axios";
import { BsPlayBtnFill, BsStopCircle } from "react-icons/bs";

const Timer = (props) => {
  const {
    time,
    startHalf1,
    fixtureId,
    startHalf2,
    onStop,
    fixture,
    teams,
    home,
    away,
    updateMultipleTeam,
  } = props;

  const determineResult = (fixture, home, away) => {
    if (fixture.home_team_score > fixture.away_team_score) {
      Promise.all([
        axios.put("/api/teams/wins", {
          wins: home.wins + 1,
          goalsFor: fixture.home_team_score + home.goals_for,
          goalsAgainst: fixture.away_team_score + home.goals_against,
          teamId: home.id,
        }),
        axios.put("/api/teams/losses", {
          losses: away.losses + 1,
          goalsFor: fixture.away_team_score + away.goals_for,
          goalsAgainst: fixture.home_team_score + away.goals_against,
          teamId: away.id,
        }),
      ]).then((all) => {
        const [homeTeam, awayTeam] = all;
        updateMultipleTeam(teams, homeTeam.data.rows[0], awayTeam.data.rows[0]);
      });
    } else if (fixture.away_team_score > fixture.home_team_score) {
      Promise.all([
        axios.put("/api/teams/wins", {
          wins: away.wins + 1,
          goalsFor: fixture.away_team_score + away.goals_for,
          goalsAgainst: fixture.home_team_score + away.goals_against,
          teamId: away.id,
        }),
        axios.put("/api/teams/losses", {
          losses: home.losses + 1,
          goalsFor: fixture.home_team_score + home.goals_for,
          goalsAgainst: fixture.away_team_score + home.goals_against,
          teamId: home.id,
        }),
      ]).then((all) => {
        const [homeTeam, awayTeam] = all;
        updateMultipleTeam(teams, homeTeam.data.rows[0], awayTeam.data.rows[0]);
      });
    } else if (fixture.away_team_score === fixture.home_team_score) {
      Promise.all([
        axios.put("/api/teams/draws", {
          draws: away.draws + 1,
          goalsFor: fixture.away_team_score + away.goals_for,
          goalsAgainst: fixture.home_team_score + away.goals_against,
          teamId: away.id,
        }),
        axios.put("/api/teams/draws", {
          draws: home.draws + 1,
          goalsFor: fixture.home_team_score + home.goals_for,
          goalsAgainst: fixture.away_team_score + home.goals_against,
          teamId: home.id,
        }),
      ]).then((all) => {
        const [homeTeam, awayTeam] = all;
        updateMultipleTeam(teams, homeTeam.data.rows[0], awayTeam.data.rows[0]);
      });
    }
  };

  return (
    <section className="mt-6 flex flex-col justify-center items-center ">
      <section className="border-8 border-gray-500 rounded shadow-2xl text-6xl text-white font-mono grid grid-cols-2 gap-x-px">
        <h1 className="bg-black p-2">
          {time.minutes.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
        <h1 className="bg-black p-2">
          {time.seconds.toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
      </section>
      <section className="mt-4 text-4xl flex flex-row">
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  ">
            <BsPlayBtnFill
              onClick={() => startHalf1(fixtureId, "First Half")}
              className="hover:fill-gray-400"
            />
          </button>
          <label>First-half</label>
        </section>
        <section className="flex flex-row justify-center items-center mr-10 ml-4">
          <button className="m-2  justify-center items-center ">
            <BsStopCircle
              className="hover:fill-gray-400"
              onClick={() => onStop(fixtureId, true)}
            />
          </button>
          <label htmlFor="">End Half</label>
        </section>
        <label className="mr-4"> - </label>
        <section className="flex flex-row justify-center items-center mx-4">
          <button className="m-2  ">
            <BsPlayBtnFill
              onClick={() => startHalf2(fixtureId, "Second Half")}
              className="hover:fill-gray-400"
            />
          </button>
          <label>Second-half </label>
        </section>
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  justify-center items-center ">
            <BsStopCircle
              className="hover:fill-gray-400"
              onClick={() => determineResult(fixture, home, away)}
            />
          </button>
          <label htmlFor="">End-Game</label>
        </section>
      </section>
    </section>
  );
};

export default Timer;
