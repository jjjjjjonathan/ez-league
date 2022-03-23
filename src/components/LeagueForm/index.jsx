import { useState } from 'react';
import useVisualMode from '../../hooks/useLeagueVisualMode';
import Start from './Start';
import SelectSport from './SelectSport';
import Summary from './Summary';
import axios from 'axios';

const LeagueForm2 = (props) => {
  const { state } = props;
  const [leagueName, setLeagueName] = useState('');
  const [sport, setSport] = useState(null);

  const START = 'START';
  const SPORT = 'SPORT';
  const SUMMARY = 'SUMMARY';

  const { mode, transition, back, reset } = useVisualMode(START);

  const chooseSport = (selectedSport) => {
    setSport(selectedSport);
    transition('SUMMARY');
  };

  const submit = (leagueName, sport) => {
    axios
      .put('/api/leagues', { leagueName, sport })
      .then(() => {
        return;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {mode === START && (
        <Start
          setLeagueName={setLeagueName}
          onClick={transition}
          value={leagueName}
        />
      )}
      {mode === SPORT && (
        <SelectSport sports={state.sports} onClick={chooseSport} />
      )}
      {mode === SUMMARY && (
        <Summary
          sports={state.sports}
          selectedSport={sport}
          leagueName={leagueName}
          startOver={reset}
          onSubmit={submit}
        />
      )}
    </div>
  );
};

export default LeagueForm2;
