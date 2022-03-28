const EditFixtureListItem = (props) => {
  const {
    leagueTeams,
    homeTeamId,
    awayTeamId,
    status,
    fixtureId,
    scheduledTime,
    setEditFixtureId,
    onClickEditBack,
  } = props;

  const homeTeam = leagueTeams.find((team) => team.id === homeTeamId);

  const awayTeam = leagueTeams.find((team) => team.id === awayTeamId);
  return (
    <tr>
      <td>
        <strong>{homeTeam.name}</strong> v. <strong>{awayTeam.name}</strong>
      </td>
      <td>
        <em>Pick a new date: </em>
      </td>
      <td>
        <input type="datetime-local" id="game-time" value={scheduledTime} />
      </td>
      <td></td>
      <td>
        <button>Submit</button>
      </td>
      <td>
        <button onClick={() => onClickEditBack()}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditFixtureListItem;
