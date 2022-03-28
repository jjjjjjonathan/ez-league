import ScheduleGenerator from './AdminDashboard/ScheduleGenerator';
import FixtureList from './FixtureList';

const Schedule = (props) => {
  const { fixtures, id, teams, addNewFixtures } = props;

  const leagueFixtures = fixtures.filter((fixture) => fixture.league_id === id);

  const leagueTeams = teams.filter((team) => team.league_id === id);

  return (
    <section>
      {leagueFixtures.length < 1 && (
        <ScheduleGenerator
          leagueId={id}
          leagueTeams={leagueTeams}
          addNewFixtures={addNewFixtures}
          fixtures={fixtures}
        />
      )}
      {leagueFixtures.length >= 1 && (
        <FixtureList
          leagueFixtures={leagueFixtures}
          leagueTeams={leagueTeams}
        />
      )}
    </section>
  );
};

export default Schedule;
