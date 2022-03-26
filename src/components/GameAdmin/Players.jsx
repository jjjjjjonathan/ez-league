const Players = (props) => {
  const homePlayers = props.home.players.map((player) => {
    return <td key={player.id}>{player.name}</td>;
  });
  console.log('this is my props from players', props);
  return (
    <table>
      <thead>
        <tr>
          <th>Home</th>
          <th>Away</th>
        </tr>
      </thead>
      <tbody>
        <tr>{homePlayers}</tr>
      </tbody>
    </table>
  );
};

export default Players;
