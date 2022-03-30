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
    <tr className="hover:bg-gray-200 mx-4 odd:bg-gray-300 even:bg-gray-400">
      <td
        onClick={() => history.push(`/admin/game/${fixtureId}`)}
        className="border px-8 py-4"
      >
        <strong>{homeTeam.name}</strong> v. <strong>{awayTeam.name}</strong>
      </td>
      <td className="border px-8 py-4">{status}</td>
      <td className="border px-8 py-4">{scheduledDate}</td>
      <td className="border px-8 py-4">{scheduledTimestamp}</td>
      <td className="border px-8 py-4">
        <button onClick={(event) => onClickEdit(event, fixtureId)}>Edit</button>
      </td>
    </tr>
  );
};

export default FixtureListItem;
