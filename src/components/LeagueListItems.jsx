import { Link } from "react-router-dom";

const LeagueListItems = (props) => {
  return (
    <Link to={`/leagues/${props.id}`}>
      <section className="flex flex-row my-5 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 text-white rounded  mx-auto duration-300 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-white mx-5">
        <img
          src={props.logo}
          alt=""
          className="object-fit w-20 h-20 rounded-full bg-gray-400 ml-5"
        />
        <h1 className="my-auto mx-5 text-4xl hover:text-gray-400">
          {props.name}
        </h1>
      </section>
    </Link>
  );
};

export default LeagueListItems;
