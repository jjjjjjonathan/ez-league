import { useHistory } from "react-router-dom";

const TableListItem = (props) => {
  let history = useHistory();
  return (
    <tr
      className=" odd:bg-gray-100 even:bg-gray-200 cursor-pointer duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer"
      onClick={() => history.push(`/teams/${props.id}/admin`)}
    >
      <td className="py-3 px-6 ">{props.rank}</td>
      <td className="py-3 px-2 flex flex-row space-x-4">
        <img
          src={
            props.thumbnail_logo ? props.thumbnail_logo : "/images/small.png"
          }
          alt="team-logo"
          className={props.thumbnail_logo ? "object-contain" : "object-contain"}
        />
        <p className="sm:w-2/3 lg:w-3/4 p-4 whitespace-nowrap">{props.name}</p>
      </td>
      <td className="py-3 px-6 ">{props.matches_played}</td>
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
