import useLeagueAdminHooks from '../../hooks/useLeagueAdminHooks';
import { Fragment } from 'react';
import ScheduleGenerator from './ScheduleGenerator';
import FixtureList from '../FixtureList';

const AdminSchedule = (props) => {
  const { id, teams, fixtures } = props;
  const START = 'START';
  const SCHEDULE = 'SCHEDULE';
  const { mode, transition } = useLeagueAdminHooks(START);

  const leagueFixtures = fixtures.filter((fixture) => fixture.league_id === id);

  const leagueTeams = teams.filter((team) => team.league_id === id);
  return (
    <div>
      {mode === START && (
        <Fragment>
          <p className="py-3">
            Once your teams and players are set, click on League Schedule to
            generate a round robin schedule! You will be able to adjust the
            dates and times as you want, and each match will be available to
            start and/or end in the game console for admins!
          </p>
          <button
            className="my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold"
            onClick={() => transition('SCHEDULE')}
          >
            League Schedule
          </button>
        </Fragment>
      )}
      {mode === SCHEDULE && leagueFixtures.length < 1 && (
        <ScheduleGenerator
          leagueId={id}
          leagueTeams={leagueTeams}
          leagueFixtures={leagueFixtures}
          transition={transition}
          fixtures={fixtures}
        />
      )}
      {mode === SCHEDULE && leagueFixtures.length >= 1 && (
        <FixtureList
          leagueFixtures={leagueFixtures}
          leagueTeams={leagueTeams}
          transition={transition}
        />
      )}
    </div>
  );
};

export default AdminSchedule;
