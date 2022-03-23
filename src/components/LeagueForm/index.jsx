import { useState } from 'react';
import useVisualMode from '../../hooks/useLeagueVisualMode';
import Start from './Start';
import SelectSport from './SelectSport';

const LeagueForm2 = (props) => {
  const { state } = props;
  const [leagueName, setLeagueName] = useState('');
  const [sport, setSport] = useState(null);

  const START = 'START';
  const SPORT = 'SPORT';

  const { mode, transition, back } = useVisualMode(START);

  return (
    <div>
      {mode === START && (
        <Start setLeagueName={setLeagueName} onClick={transition} />
      )}
      {mode === SPORT && <SelectSport sports={state.sports} />}
    </div>
  );
};

export default LeagueForm2;
