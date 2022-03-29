import { Fragment } from 'react';
import useLeagueAdminHooks from '../../hooks/useLeagueAdminHooks';
import CSVReader from '../CSVReader';
import TeamForm from '../TeamForm';

const AddTeams = (props) => {
  const { id, teams, setMultipleTeams } = props;

  const teamsInLeagueCount = teams.filter(
    (team) => team.league_id === id
  ).length;

  const BUTTON = 'BUTTON';
  const SINGLE = 'SINGLE';
  const BULK = 'BULK';

  const { mode, transition, back, reset } = useLeagueAdminHooks(BUTTON);

  return (
    <Fragment>
      {teamsInLeagueCount > 1 ? (
        <p className="py-3">
          You seem to already have enough teams in the league, but you can click
          the button below if you want to add some more.
        </p>
      ) : (
        <p className="py-3">
          You don't seem to have enough teams in your league yet. Click the
          button below to add some more.
        </p>
      )}

      {mode === BUTTON && (
        <button
          className="my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold"
          onClick={() => transition('SINGLE')}
        >
          Add Teams
        </button>
      )}
      {mode === SINGLE && (
        <TeamForm
          id={id}
          setMultipleTeams={setMultipleTeams}
          teams={teams}
          transition={transition}
        />
      )}
      {mode === BULK && (
        <CSVReader
          id={id}
          teams={teams}
          setMultipleTeams={setMultipleTeams}
          transition={transition}
        />
      )}
    </Fragment>
  );
};

export default AddTeams;
