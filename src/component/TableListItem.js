const TableListItem = (props) => {
  return (
    <tr>
      <td>{props.rank}</td>
      <td>
        <img src={props.thumbnail_logo} alt="team-logo" />
      </td>
      <td>{props.name}</td>
      <td>{props.wins + props.draws + props.losses}</td>
      <td>{props.wins}</td>
      <td>{props.draws}</td>
      <td>{props.losses}</td>
      <td>{props.goals_for}</td>
      <td>{props.goals_against}</td>
      <td>{props.goal_difference}</td>
      <td>{props.points}</td>
    </tr>
  );
};

export default TableListItem;
