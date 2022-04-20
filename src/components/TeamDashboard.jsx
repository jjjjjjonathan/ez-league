import { useParams } from 'react-router-dom';
import useTeamDashboardMode from '../hooks/useTeamDashboardMode';
import CSVPlayers from './CSVPlayers';
import PlayerForm from './PlayerForm';
import PlayerListItem from './PlayerListItem';

const TeamDashboard = (props) => {
  const ADD1PLAYER = 'ADD1PLAYER';
  const ADDBULK = 'ADDBULK';
  const { players, teams } = props;
  const { mode, transition } = useTeamDashboardMode(ADD1PLAYER);
  const id = parseInt(useParams().id, 10);
  const thisTeamName = teams.find((team) => team.id === id).name;
  const playersInTeam = players.filter((player) => player.team_id === id);

  const teamPlayers = playersInTeam.map((player) => {
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
    <div className="container mx-auto px-4 py-6 w-3/4">
      <h1 className="text-3xl text-center">
        Welcome to the Admin Dashboard for your team:{' '}
        <strong>{thisTeamName}</strong>
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <aside className="container">
          <h1 className="text-center text-gray-600 text-xl mt-4">
            Add Players
          </h1>
          {mode === ADD1PLAYER && (
            <PlayerForm id={id} players={players} transition={transition} />
          )}
          {mode === ADDBULK && <CSVPlayers id={id} transition={transition} />}
        </aside>
        <aside>
          <h1 className="text-center text-gray-600 text-xl mt-4">
            List of Players
          </h1>
          <table className="container mt-10 m-5 mx-auto rounded-sm text-gray-600">
            <thead className="text-center bg-gray-400 rounded-sm">
              <tr>
                <th className="text-center">Image</th>
                <th className="text-center">Shirt Number</th>
                <th className="text-center">Name</th>
                <th className="text-center">Goals</th>
                <th className="text-center">Yellow Cards</th>
                <th className="text-center">Red Cards</th>
              </tr>
            </thead>
            <tbody>{teamPlayers}</tbody>
          </table>
        </aside>
      </section>
    </div>
  );
};

export default TeamDashboard;
