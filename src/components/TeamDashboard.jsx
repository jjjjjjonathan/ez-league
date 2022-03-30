import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useTeamDashboardMode from '../hooks/useTeamDashboardMode';
import Players from './GameAdmin/Players';
import PlayerForm from './PlayerForm';
import Start from './TeamDashboard/Start';

const TeamDashboard = (props) => {
  const START = 'START';
  const ADDPLAYERS = 'ADDPLAYERS';
  const SEEPLAYERS = 'SEEPLAYERS';
  const { set1Player, players } = props;
  const { mode, transition, reset, back } = useTeamDashboardMode(START);
  const id = parseInt(useParams().id, 10);
  return (
    <Fragment>
      {mode === START && <Start onClick={transition} />}
      {mode === ADDPLAYERS && (
        <PlayerForm
          id={parseInt(id)}
          set1Player={set1Player}
          players={players}
        />
      )}
      {mode === SEEPLAYERS && <Players teamId={id} players={players} />}
    </Fragment>
  );
};

export default TeamDashboard;
