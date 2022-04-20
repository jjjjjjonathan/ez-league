import ScheduleGenerator from './AdminDashboard/ScheduleGenerator';
import FixtureList from './FixtureList';

const Schedule = (props) => {
  const { fixtures, id, teams, onClickBack } = props;

  const leagueFixtures = fixtures.filter((fixture) => fixture.league_id === id);

  const leagueTeams = teams.filter((team) => team.league_id === id);

  return (
    <section>
      {leagueFixtures.length < 1 && (
        <ScheduleGenerator
          leagueId={id}
          leagueTeams={leagueTeams}
          fixtures={fixtures}
          onClickBack={onClickBack}
        />
      )}
      {leagueFixtures.length >= 1 && (
        <FixtureList
          leagueFixtures={leagueFixtures}
          leagueTeams={leagueTeams}
          onClickBack={onClickBack}
        />
      )}
    </section>
  );
};

export default Schedule;
