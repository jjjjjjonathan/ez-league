import { useState } from 'react';
import useVisualMode from '../../hooks/useLeagueVisualMode';
import Start from './Start';
import SelectSport from './SelectSport';
import Summary from './Summary';

const LeagueForm2 = (props) => {
  const { state } = props;
  const [leagueName, setLeagueName] = useState('');
  const [sport, setSport] = useState(null);

  const START = 'START';
  const SPORT = 'SPORT';
  const SUMMARY = 'SUMMARY';

  const { mode, transition, back } = useVisualMode(START);

  const chooseSport = (selectedSport) => {
    setSport(selectedSport);
    transition('SUMMARY');
  };

  return (
    <div>
      {mode === START && (
        <Start setLeagueName={setLeagueName} onClick={transition} />
      )}
      {mode === SPORT && (
        <SelectSport sports={state.sports} onClick={chooseSport} />
      )}
      {mode === SUMMARY && (
        <Summary
          sports={state.sports}
          selectedSport={sport}
          leagueName={leagueName}
        />
      )}
    </div>
  );
};

export default LeagueForm2;
