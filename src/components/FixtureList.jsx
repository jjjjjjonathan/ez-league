import FixtureListItem from './FixtureListItem';

const FixtureList = (props) => {
  const { leagueFixtures, leagueTeams } = props;

  const mappedLeagueFixtures = leagueFixtures.map((fixture) => (
    <FixtureListItem
      key={fixture.id}
      leagueTeams={leagueTeams}
      homeTeamId={fixture.home_team_id}
      awayTeamId={fixture.away_team_id}
      status={fixture.status}
      fixtureId={fixture.id}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Home</th>
          <th>Away</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{mappedLeagueFixtures}</tbody>
    </table>
  );
};

export default FixtureList;
