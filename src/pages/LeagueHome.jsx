import { useParams, useLocation } from 'react-router-dom';

const LeagueHome = (props) => {
  let { id } = useParams();
  const location = useLocation();
  console.log(location);

  const league = location.state.leagues.find((league) => league.id === id);
  console.log(league);

  return <h1>Welcome to League {id}</h1>;
};

export default LeagueHome;
