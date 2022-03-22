import { useState, Fragment } from 'react';

const TeamForm = (props) => {
  const [teamName, setTeamName] = useState('');
  const submit = (event) => {
    event.preventDefault();
  };
  const save = () => {
    return;
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
      </form>
      <button onClick={save}>Submit</button>
    </Fragment>
  );
};

export default TeamForm;
