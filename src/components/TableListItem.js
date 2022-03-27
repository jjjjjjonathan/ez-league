const TableListItem = (props) => {
  return (
    <tr className="bg-gray-100 cursor-pointer duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer">
      <td className="py-3 px-6 ">{props.rank}</td>
      <td className="py-3 px-2 flex flex-row space-x-4">
        <img
          src={props.thumbnail_logo}
          alt="team-logo"
          className="object-contain "
        />
        <p className="sm:w-2/3 lg:w-3/4 p-4 whitespace-nowrap">{props.name}</p>
      </td>
      <td className="py-3 px-6 ">{props.wins + props.draws + props.losses}</td>
      <td className="py-3 px-6 ">{props.wins}</td>
      <td className="py-3 px-6 ">{props.draws}</td>
      <td className="py-3 px-6 ">{props.losses}</td>
      <td className="py-3 px-6 ">{props.goals_for}</td>
      <td className="py-3 px-6 ">{props.goals_against}</td>
      <td className="py-3 px-6 ">{props.goal_difference}</td>
      <td className="py-3 px-6 ">{props.points}</td>
    </tr>
  );
};

export default TableListItem;
