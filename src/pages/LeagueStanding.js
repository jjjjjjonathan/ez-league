import TableList from "../components/TableList";
import { useParams } from "react-router-dom";

const LeagueStanding = (props) => {
  const { id } = useParams();

  return <TableList teams={props.teams} id={parseInt(id)} />;
};

export default LeagueStanding;
