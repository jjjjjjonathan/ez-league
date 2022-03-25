import { useParams } from 'react-router-dom';

const LeagueHome = (props) => {
  const { state } = props;
  let { id } = useParams();

  const league = state.leagues.find((league) => league.id === parseInt(id, 10));

  return <h1>Welcome to League {league.name}</h1>;
};

export default LeagueHome;
