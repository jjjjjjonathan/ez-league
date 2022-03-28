import { Link } from "react-router-dom";

const LeagueListItems = (props) => {
  return (
    <Link to={`/leagues/${props.id}`}>
      <section className="flex flex-row">
        <img src={props.logo} alt="" className="w" />
        <h1>{props.name}</h1>
      </section>
    </Link>
  );
};

export default LeagueListItems;
