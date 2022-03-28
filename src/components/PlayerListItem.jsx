const PlayerListItem = (props) => {
  const { name, shirtNumber, goals, yellowCards, redCards, photoUrl } = props;
  return (
    <tr>
      <td>
        <img src={photoUrl} alt={name} />
      </td>
      <td>{shirtNumber.toString()}</td>
      <td>{name}</td>
      <td>{goals.toString()}</td>
      <td>{yellowCards.toString()}</td>
      <td>{redCards.toString()}</td>
    </tr>
  );
};

export default PlayerListItem;
