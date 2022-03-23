import axios from 'axios';
import { useState, Fragment } from 'react';

const LeagueForm = (props) => {
  const [leagueName, setLeagueName] = useState('');
  const [sport, setSport] = useState('');
  const submit = (event) => {
    event.preventDefault();
  };
  const validate = (leagueName, sport) => {
    if (leagueName) {
      save(leagueName, sport);
    }
  };

  const save = (leagueName, sport) => {
    axios.put('/api/', { leagueName, sport });
  };

  return (
    <Fragment>
      <form autoComplete="off" onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Enter League Name"
          onChange={(event) => setLeagueName(event.target.value)}
        />
        <input
          type="search"
          name="logoURL"
          placeholder="Select a sport from the dropdown menu for your league"
          onChange={(event) => setSport(event.target.value)}
        />
        <select>
          <option value="soccer">Soccer</option>
          <option value="basketball">Basketball</option>
        </select>
      </form>
      <button onClick={() => validate(leagueName, sport)}>Submit</button>
    </Fragment>
  );
};

export default LeagueForm;
