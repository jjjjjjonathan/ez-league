import { useParams } from 'react-router-dom';
import { Fragment, useState } from 'react';
import CSVReader from '../components/CSVReader';
import TeamForm from '../components/TeamForm';

const AdminLeague = (props) => {
  let { id } = useParams();
  const { leagues, fixtures, teams, setMultipleTeams } = props;

  const checkEmptyLeague = (id, teams) => {
    if (
      teams.filter((team) => team.league_id === parseInt(id, 10)).length < 1
    ) {
      return (
        <Fragment>
          <p>You don't seem to have any teams. Why don't you add some?</p>
          <TeamForm id={id} setMultipleTeams={setMultipleTeams} teams={teams} />
          <CSVReader
            id={id}
            setMultipleTeams={setMultipleTeams}
            teams={teams}
          />
        </Fragment>
      );
    }
  };

  const leagueName = leagues.find(
    (league) => league.id === parseInt(id, 10)
  ).name;

  return (
    <Fragment>
      <h1>{leagueName} - Admin Page</h1>
      <h2>Teams</h2>
      {checkEmptyLeague(id, teams)}
      <h2>Schedule</h2>
      <h2>Players</h2>
    </Fragment>
  );
};

export default AdminLeague;
