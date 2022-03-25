const EventTable = (props) => {
  const events = props.event.map((event) => {
    return (
      <tr keys={event.id}>
        <td>{event.team}</td>
        <td> {event.time}</td>
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
