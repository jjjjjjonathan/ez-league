import ScheduleListItems from "../components/ClientSchedule/ScheduleListItems";
import { useParams } from "react-router-dom";

const LeagueResults = (props) => {
  const { fixtures, teams } = props;
  const currentDate = new Date();
  // "2012-07-28T04:00:00.000Z

  const { id } = useParams();
  const fixtureLeague = fixtures.filter(
    (fixture) => fixture.league_id === parseInt(id)
  );
  const resultsGame = fixtureLeague.filter(
    (game) => game.scheduled_time < currentDate.toISOString()
  );

  const eachResult = resultsGame.map((game) => {
    return <ScheduleListItems game={game} id={id} teams={teams} />;
  });

  return (
    <article>
      <h1 className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 my-auto  p-5 text-4xl text-white ">
        RESULTS
      </h1>
      <section className="mx-auto">{eachResult}</section>;
    </article>
  );
};

export default LeagueResults;
