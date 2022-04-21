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
    <tr className="hover:bg-gray-200 mx-4 odd:bg-gray-300 even:bg-gray-400">
      <td className="border px-8 py-4">
        <strong>{homeTeam.name}</strong> v. <strong>{awayTeam.name}</strong>
      </td>
      <td className="border px-8 py-4">
        <em>Pick a new date: </em>
      </td>
      <td className="border px-8 py-4">
        <input
          className="bg-gray-300"
          type="datetime-local"
          id="game-time"
          value={scheduledTime}
        />
      </td>
      <td className="border px-8 py-4">
        <button>Submit</button>
      </td>
      <td className="border px-8 py-4">
        <button onClick={() => onClickEditBack()}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditFixtureListItem;
