const team = [
  {
    id: 2,
    league_id: 1,
    name: "Manchester City",
    thumbnail_logo:
      "https://resources.premierleague.com/premierleague/badges/25/t43.png",
    goals_for: 93,
    goals_against: 29,
    wins: 28,
    draws: 5,
    losses: 5,
    points: 89,
    goal_difference: 64,
  },
];

const TableListItem = (props) => {
  return (
    <tr>
      <td>{props.rank}</td>
      <td>
        <img src={props.thumbnail_logo} alt="team-logo">
          {props.name}
        </img>
      </td>
      <td>{props.name}</td>
      <td>{props.wins + props.draws + props.losses}</td>
      <td>{props.wins}</td>
      <td>{props.draws}</td>
      <td>{props.looses}</td>
      <td>{props.goals_for}</td>
      <td>{props.goals_against}</td>
      <td>{props.goal_difference}</td>
      <td>{props.points}</td>
    </tr>
  );
};

export default TableListItem;
