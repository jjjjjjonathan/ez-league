import { useParams } from 'react-router-dom';
import NavLeague from '../components/NavLeague';
import TeamCards from '../components/HomeLeagueCards/TeamCards';

const LeagueHome = (props) => {
  const { state } = props;
  let { id } = useParams();

  const league = state.leagues.find((league) => league.id === parseInt(id, 10));
  const teamInTheLeague = state.teams.filter(
    (team) => team.league_id === league.id
  );

  const teamCards = teamInTheLeague.map((team) => (
    <TeamCards key={team.id} team={team} />
  ));

  return (
    <div className="m-0">
      <aside className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 my-auto text-center p-5 text-4xl text-white flex flex-row">
        <img
          src={league.logo ? league.logo : '/images/ez-league.png'}
          alt=""
          className="rounded-full h-20 w-20 bg-gray-50"
        />
        <h1 className="my-auto ml-2">{league.name}</h1>
      </aside>
      <NavLeague id={league.id} logo={league.logo} />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {teamCards}
      </div>
    </div>
  );
};

export default LeagueHome;
