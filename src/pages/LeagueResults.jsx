import ScheduleListItems from '../components/ClientSchedule/ScheduleListItems';
import { useParams } from 'react-router-dom';

const LeagueResults = (props) => {
  const { fixtures, teams } = props;

  const { id } = useParams();
  const fixtureLeague = fixtures.filter(
    (fixture) => fixture.league_id === parseInt(id)
  );
  const resultsGame = fixtureLeague.filter((game) => game.status === 'Final');

  const eachResult = resultsGame.map((game) => {
    return (
      <ScheduleListItems game={game} id={id} teams={teams} key={game.id} />
    );
  });

  return (
    <article>
      <h1 className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 my-auto  p-5 text-4xl text-white ">
        RESULTS
      </h1>
      <section className="mx-auto w-5/6">{eachResult}</section>
    </article>
  );
};

export default LeagueResults;
