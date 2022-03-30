import { useParams } from 'react-router-dom';
import playersLeagueGenerator from '../helpers/playerGenerator';
import PlayerListItem from '../components/PlayerListItem';

const LeaguePlayers = (props) => {
  const id = useParams();
  const leagueId = parseInt(id.id);
  const { players, teams } = props;
  const playersInLeague = playersLeagueGenerator(leagueId, teams, players);
  console.log('this is players', players);

  const mappedPlayers = playersInLeague.map((player) => {
    return (
      <PlayerListItem
        key={player.id}
        name={player.name}
        shirtNumber={player.shirt_number}
        goals={player.goals}
        yellowCards={player.yellow_cards}
        redCards={player.red_cards}
        photoUrl={player.photo_url ? player.photo_url : '/images/lego.png'}
      />
    );
  });

  return (
    <table className="container m-5 mx-auto w-5/6">
      <thead className="text-center">
        <tr>
          <th className="text-center">Image</th>
          <th className="text-center">Shirt Number</th>
          <th className="text-center">Name</th>
          <th className="text-center">Goals</th>
          <th className="text-center">Yellow Cards</th>
          <th className="text-center">Red Cards</th>
        </tr>
      </thead>
      <tbody>{mappedPlayers}</tbody>
    </table>
  );
};

export default LeaguePlayers;
