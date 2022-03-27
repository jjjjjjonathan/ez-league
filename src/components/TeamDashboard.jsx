import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import useTeamDashboardMode from '../hooks/useTeamDashboardMode';
import PlayerForm from './PlayerForm';
import Start from './TeamDashboard/Start';


const TeamDashboard = (props) => {
  const START = "START"
  const ADDPLAYERS = "ADDPLAYERS"
  const SEEPLAYERS = "SEEPLAYERS"
  const {set1Player, players} = props;
  const {mode, transition, reset, back} = useTeamDashboardMode(START); 
  let {id} = useParams()
  return (
    <Fragment>
      {

        mode === START && <Start onClick={transition} />

      }
      {
        mode === ADDPLAYERS && <PlayerForm id={parseInt(id)} set1Player={set1Player} players={players}/>
      }
      {/* {
        mode === SEETEAMS && <TableList id={parseInt(id)} teams={teams} />
      } */}
    </Fragment>
  )
};

export default TeamDashboard;
