import { useHistory } from 'react-router-dom';

const FixtureListItem = (props) => {
  let history = useHistory();
  const { leagueTeams, status, homeTeamId, awayTeamId, fixtureId } = props;

  const homeTeam = leagueTeams.find((team) => team.id === homeTeamId);

  const awayTeam = leagueTeams.find((team) => team.id === awayTeamId);

  return (
    <tr onClick={() => history.push(`/admin/game/${fixtureId}`)}>
      <td>{homeTeam.name}</td>
      <td>{awayTeam.name}</td>
      <td>{status}</td>
    </tr>
  );
};

export default FixtureListItem;
