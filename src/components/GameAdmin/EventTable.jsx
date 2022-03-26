import EventTableItem from "./EventTableItem";

const EventTable = (props) => {
  console.log("this is game schedule", props);

  const { fixtureId, fixtureEvents, eventTypes, teams, players } = props;

  const thisFixtureEvents = fixtureEvents.filter(
    (fixture) => fixture.fixture_id === fixtureId
  );

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
  const events = thisFixtureEvents.map((event) => {
    return (
      <EventTableItem
        key={event.id}
        value={event.id}
        type={event.fixture_event_type_id}
        goalScorer={event.goal_scorer_id}
        team={event.team_id}
        listOfTeams={teams}
        listOfPlayers={players}
        time={event.time}
        listOfTypes={eventTypes}
      />
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
