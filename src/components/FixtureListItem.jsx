import { useHistory } from 'react-router-dom';

const FixtureListItem = (props) => {
  let history = useHistory();
  const {
    leagueTeams,
    status,
    homeTeamId,
    awayTeamId,
    fixtureId,
    scheduledTimestamp,
    scheduledDate,
    onClickEdit,
  } = props;

  const homeTeam = leagueTeams.find((team) => team.id === homeTeamId);

  const awayTeam = leagueTeams.find((team) => team.id === awayTeamId);

  return (
    <tr>
      <td onClick={() => history.push(`/admin/game/${fixtureId}`)}>
        <strong>{homeTeam.name}</strong> v. <strong>{awayTeam.name}</strong>
      </td>
      <td>{status}</td>
      <td>{scheduledDate}</td>
      <td>{scheduledTimestamp}</td>
      <td>
        <button onClick={(event) => onClickEdit(event, fixtureId)}>Edit</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>
  );
};

export default FixtureListItem;
