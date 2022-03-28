import PlayerListItem from '../PlayerListItem';

const Players = (props) => {
  const { teamId, players } = props;

  const filteredPlayers = players.filter((player) => player.team_id === teamId);

  const mappedPlayers = filteredPlayers.map((player) => {
    return (
      <PlayerListItem
        key={player.id}
        name={player.name}
        shirtNumber={player.shirt_number}
        goals={player.goals}
        yellowCards={player.yellow_cards}
        redCards={player.red_cards}
        photoUrl={player.photo_url}
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Shirt Number</th>
          <th>Name</th>
          <th>Goals</th>
          <th>Yellow Cards</th>
          <th>Red Cards</th>
        </tr>
      </thead>
      <tbody>{mappedPlayers}</tbody>
    </table>
  );
};

export default Players;
