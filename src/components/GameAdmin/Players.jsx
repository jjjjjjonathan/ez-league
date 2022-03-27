const Players = (props) => {
  const homePlayers = props.home.players.map((player) => {
    return <tr key={player.id}>{player.name}</tr>;
  });
  const awayPlayers = props.away.players.map((player) => {
    return <tr key={player.id}>{player.name}</tr>;
  });
  console.log("this is my props from players", props);
  return (
    <table>
      <thead>
        <tr>
          <th>Home</th>
          <th>Away</th>
        </tr>
      </thead>
      <tbody>
        <td>
          <tr>{homePlayers}</tr>
        </td>
        <td>
          <tr>{awayPlayers}</tr>
        </td>
      </tbody>
    </table>
  );
};

export default Players;
