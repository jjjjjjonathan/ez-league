import EventTableItem from './EventTableItem';
import EditEventTableItem from './EditEventTableItem';
import { useState } from 'react';
import axios from 'axios';

const EventTable = (props) => {
  const {
    fixtureId,
    fixtureEvents,
    eventTypes,
    teams,
    players,
    firstHalfTime,
    fixtureStatus,
    secondHalfTime,
    updateFixturesEvent,
    admin,
    deleteFixtureEvent,
  } = props;
  const [editEventId, setEditEventId] = useState(null);

  const onClickEdit = (event, eventValue) => {
    event.preventDefault();
    setEditEventId(eventValue);
  };

  const onClickDelete = (event, eventId) => {
    event.preventDefault();
    return axios.delete(`/api/fixtures/events/${eventId}`).then((data) => {
      deleteFixtureEvent(fixtureEvents, data.data[0]);
    });
  };

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

  const preventSubmit = (event) => {
    event.preventDefault();
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
        updateFixturesEvent={updateFixturesEvent}
        fixtureEvents={fixtureEvents}
        setEditEventId={setEditEventId}
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
        admin={admin}
        onClick={onClickEdit}
        onClickDelete={onClickDelete}
      />
    );
  });
  return (
    <form onSubmit={(event) => preventSubmit(event)}>
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
