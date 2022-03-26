const EventTable = (props) => {
  console.log('this is game schedule', props);

  const { eventsInGame, eventTypes, teams, players } = props;

  const findTeamName = (id) => {
    return teams.find((team) => team.id === id).name;
  };

  const findEventType = (id) => {
    return eventTypes.find((eventType) => eventType.id === id).name;
  };

  const findGoalScorerName = (id) => {
    return players.find((player) => player.id === id).name;
  };

  // const gameStart = props.fixture.first_half_start_time;
  const events = props.eventsInGame.map((event) => {
    return (
      <tr>
        <td>{findTeamName(event.team_id)}</td>
        <td> placeholder for time </td>
        <td>{findEventType(event.fixture_event_type_id)}</td>
        <td>{findGoalScorerName(event.goal_scorer_id)}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Team</th>
          <th>Time</th>
          <th>Event</th>
          <th>Player</th>
        </tr>
      </thead>
      <tbody>{events}</tbody>
    </table>
  );
};

export default EventTable;
