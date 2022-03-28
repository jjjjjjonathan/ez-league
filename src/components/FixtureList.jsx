import FixtureListItem from './FixtureListItem';
import EditFixtureListItem from './EditFixtureListItem';
import { useState } from 'react';

const FixtureList = (props) => {
  const { leagueFixtures, leagueTeams, onClickBack } = props;

  const [editFixtureId, setEditFixtureId] = useState(null);

  const onClickEdit = (event, eventValue) => {
    event.preventDefault();
    setEditFixtureId(eventValue);
  };

  const onClickEditBack = () => {
    setEditFixtureId(null);
  };

  const mappedLeagueFixtures = leagueFixtures.map((fixture) => {
    return editFixtureId === fixture.id ? (
      <EditFixtureListItem
        key={fixture.id}
        leagueTeams={leagueTeams}
        homeTeamId={fixture.home_team_id}
        awayTeamId={fixture.away_team_id}
        status={fixture.status}
        fixtureId={fixture.id}
        scheduledTime={fixture.scheduledTime}
        setEditFixtureId={setEditFixtureId}
        onClickEditBack={onClickEditBack}
      />
    ) : (
      <FixtureListItem
        key={fixture.id}
        leagueTeams={leagueTeams}
        homeTeamId={fixture.home_team_id}
        awayTeamId={fixture.away_team_id}
        status={fixture.status}
        fixtureId={fixture.id}
        scheduledDate={fixture.scheduled_date}
        scheduledTimestamp={fixture.scheduled_timestamp}
        setEditFixtureId={setEditFixtureId}
        onClickEdit={onClickEdit}
      />
    );
  });

  return (
    <div>
      <table>
        <tbody>{mappedLeagueFixtures}</tbody>
      </table>
      <button onClick={() => onClickBack()}>Go Back</button>
    </div>
  );
};

export default FixtureList;
