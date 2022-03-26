import EventTableItem from "./EventTableItem";
import EditEventTableItem from "./EditEventTableItem";
import { useState } from "react";

const EventTable = (props) => {
  const [editEventId, setEditEventId] = useState(null);

  const onClickEdit = (event, eventValue) => {
    event.preventDefault();
    setEditEventId(eventValue);
  };

  const {
    fixtureId,
    fixtureEvents,
    eventTypes,
    teams,
    players,
    firstHalfTime,
    fixtureStatus,
    secondHalfTime,
  } = props;

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
    return editEventId === event.id ? (
      <EditEventTableItem
        key={event.id}
        value={event.id}
        type={event.fixture_event_type_id}
        goalScorer={event.goal_scorer_id}
        team={event.team_id}
        listOfTeams={teams}
        listOfPlayers={players}
        time={event.time}
        listOfTypes={eventTypes}
        yellowCarder={event.yellow_card_id}
        redCarder={event.red_card_id}
        subIn={event.sub_in_id}
        firstHalfTime={firstHalfTime}
        fixtureStatus={fixtureStatus}
        secondHalfTime={secondHalfTime}
        eventHalf={event.half}
      />
    ) : (
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
        yellowCarder={event.yellow_card_id}
        redCarder={event.red_card_id}
        subIn={event.sub_in_id}
        firstHalfTime={firstHalfTime}
        fixtureStatus={fixtureStatus}
        secondHalfTime={secondHalfTime}
        eventHalf={event.half}
        onClick={onClickEdit}
      />
    );
  });
  return (
    <form>
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
    </form>
  );
};

export default EventTable;
