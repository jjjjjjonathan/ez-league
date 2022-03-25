import { useState } from 'react';
import useLeagueVisualMode from '../../hooks/useLeagueVisualMode';
import Start from './Start';
import SelectSport from './SelectSport';
import Summary from './Summary';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';

const LeagueForm2 = (props) => {
  let history = useHistory();
  const { state, setState } = props;
  const [leagueName, setLeagueName] = useState('');
  const [sport, setSport] = useState(null);

  const START = 'START';
  const SPORT = 'SPORT';
  const SUMMARY = 'SUMMARY';

  const { mode, transition, back, reset } = useLeagueVisualMode(START);

  const chooseSport = (selectedSport) => {
    setSport(selectedSport);
    transition('SUMMARY');
  };

  const submit = (leagueName, sport) => {
    axios
      .put('/api/leagues', { leagueName, sport })
      .then((data) => {
        const id = data.data[0].id;
        console.log(data.data[0]);
        setState((prev) => {
          const updatedLeagues = [
            ...prev.leagues,
            {
              id: id,
              cover_photo: null,
              logo: null,
              name: leagueName,
              sport_type_id: sport,
              year: null,
            },
          ];
          return {
            ...prev,
            leagues: updatedLeagues,
          };
        });
        history.push({
          pathname: `leagues/${id}`,
          newLeague: true,
        });
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
