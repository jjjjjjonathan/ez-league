const PlayerListItem = (props) => {
  const { name, shirtNumber, goals, yellowCards, redCards, photoUrl } = props;
  return (
    <tr className=" odd:bg-gray-100 even:bg-gray-200 cursor-pointer duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer">
      <td className="text-center">
        <img src={photoUrl} alt="pict" className="rounded-full w-12 h-12" />
      </td>
      <td className="text-center">{shirtNumber.toString()}</td>
      <td className="text-center">{name}</td>
      <td className="text-center">{goals.toString()}</td>
      <td className="text-center">{yellowCards.toString()}</td>
      <td className="text-center">{redCards.toString()}</td>
    </tr>
  );
};

export default PlayerListItem;
