import { useParams } from 'react-router-dom';
import { Fragment } from 'react';
import CSVReader from '../components/CSVReader';

const AdminLeague = (props) => {
  const { leagues, fixtures, teams, setMultipleTeams } = props;

  const checkEmptyLeague = (id, teams) => {
    if (
      teams.filter((team) => team.league_id === parseInt(id, 10)).length < 1
    ) {
      console.log(teams.filter((team) => team.league_id === id));
      return (
        <Fragment>
          <p>You don't seem to have any teams. Why don't you add some?</p>
          <CSVReader
            id={id}
            setMultipleTeams={setMultipleTeams}
            teams={teams}
          />
        </Fragment>
      );
    }
  };

  let { id } = useParams();

  return (
    <Fragment>
      <h1>Admin page for {id}</h1>
      {checkEmptyLeague(id, teams)}
    </Fragment>
  );
};

export default AdminLeague;
