import { Link } from 'react-router-dom';

const NavLeague = (props) => {
  return (
    <article className="text-white bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 flex flex-row">
      <Link to={`${props.id}/table`}>
        <h1 className="duration-300 hover:scale-110 mx-2">Table</h1>
      </Link>
      <Link to={`${props.id}/players`}>
        <h1 className="duration-300 hover:scale-110 mx-2">Players</h1>
      </Link>
      <Link to={`${props.id}/results`}>
        <h1 className="duration-300 hover:scale-110 mx-2">Results</h1>
      </Link>
      <Link to={`${props.id}/schedule`}>
        <h1 className="duration-300 hover:scale-110 mx-2">Schedule</h1>
      </Link>
    </article>
  );
};

export default NavLeague;
