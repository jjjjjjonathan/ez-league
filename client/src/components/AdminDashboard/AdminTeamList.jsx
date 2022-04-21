import useLeagueAdminHooks from '../../hooks/useLeagueAdminHooks';
import { Fragment } from 'react';
import TableList from '../TableList';

const AdminTeamList = (props) => {
  const START = 'START';
  const SEETEAMS = 'SEETEAMS';

  const { mode, transition } = useLeagueAdminHooks('START');
  const { id, teams } = props;
  return (
    <div>
      {mode === START && (
        <Fragment>
          <p className="py-3">
            If you added some teams already, click See Teams to check the table.
            You can click on each of the teams to go to their respective pages
            to add players.
          </p>
          <button
            className="my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold"
            onClick={() => transition('SEETEAMS')}
          >
            See Teams
          </button>
        </Fragment>
      )}
      {mode === SEETEAMS && (
        <TableList id={id} teams={teams} transition={transition} />
      )}
    </div>
  );
};

export default AdminTeamList;
