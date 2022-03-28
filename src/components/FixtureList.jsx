import FixtureListItem from './FixtureListItem';

const FixtureList = (props) => {
  const { leagueFixtures, leagueTeams, onClickBack } = props;

  const mappedLeagueFixtures = leagueFixtures.map((fixture) => (
    <FixtureListItem
      key={fixture.id}
      leagueTeams={leagueTeams}
      homeTeamId={fixture.home_team_id}
      awayTeamId={fixture.away_team_id}
      status={fixture.status}
      fixtureId={fixture.id}
      scheduledTime={fixture.scheduled_time}
    />
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Home</th>
            <th>Away</th>
            <th>Status</th>
            <th>Scheduled for</th>
          </tr>
        </thead>
        <tbody>{mappedLeagueFixtures}</tbody>
      </table>
      <button onClick={() => onClickBack()}>Go Back</button>
    </div>
  );
};

export default FixtureList;
