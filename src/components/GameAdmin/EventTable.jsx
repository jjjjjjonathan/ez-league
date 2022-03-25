const EventTable = (props) => {
  console.log("this is game schedule", props);
  const gameStart = props.fixture.first_half_start_time;
  const events = props.event.map((event) => {
    const eventTime = Math.floor(
      (Date.parse(event.time) - Date.parse(gameStart)) / (1000 * 60)
    );
    return (
      <tr keys={event.id}>
        <td>{event.team}</td>
        <td> {eventTime}</td>
        <td>{event.event}</td>
        <td>{event.player}</td>
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
