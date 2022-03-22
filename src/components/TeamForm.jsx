import axios from 'axios';
import { useState, Fragment } from 'react';

const TeamForm = (props) => {
  const [teamName, setTeamName] = useState('');
  const [logo, setLogo] = useState('');
  const submit = (event) => {
    event.preventDefault();
  };
  const validate = (teamName, logo) => {
    if (teamName) {
      save(teamName, logo);
    }
  };

  const save = (teamName, logo) => {
    axios.put('/api/teams', { teamName, logo });
  };

  return (
    <Fragment>
      <form autoComplete="off" onSubmit={submit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Team Name"
          onChange={(event) => setTeamName(event.target.value)}
        />
        <input
          type="text"
          name="logoURL"
          placeholder="Enter a URL for your logo"
          onChange={(event) => setLogo(event.target.value)}
        />
      </form>
      <button onClick={() => validate(teamName, logo)}>Submit</button>
    </Fragment>
  );
};

export default TeamForm;
