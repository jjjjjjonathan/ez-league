import axios from 'axios';
import { useState, Fragment } from 'react';

const TeamForm = (props) => {
  const { id, setMultipleTeams, teams } = props;
  const [teamName, setTeamName] = useState('');
  const [logo, setLogo] = useState(null);
  const submit = (event) => {
    event.preventDefault();
  };

  const save = (leagueId, teamName, logo) => {
    axios.put('/api/teams/add', { leagueId, teamName, logo }).then((data) => {
      setMultipleTeams(teams, data.data.rows);
    });
  };
  const validate = (event, leagueId, teamName, logo) => {
    event.preventDefault();
    console.log('validating...');
    if (teamName) {
      console.log('saving...');
      save(leagueId, teamName, logo);
    }
  };

  return (
    <Fragment>
      <h1 className="flex items-center justify-center mt-5 text-2xl ">
        Add Your Team
      </h1>
      <article className="flex justify-center mt-10 ">
        <section className="w-full max-w-sm flex-col">
          <form
            autoComplete="off"
            onSubmit={submit}
            className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Team Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Team Name"
                onChange={(event) => setTeamName(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Add Team Logo
              </label>
              <input
                type="text"
                name="logoURL"
                placeholder="Enter a URL for your logo"
                onChange={(event) =>
                  setLogo(
                    event.target.value.length === 0 ? null : event.target.value
                  )
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              />
            </div>
          </form>
          <div className="md:flex md:justify-center mb-6">
            <button
              onClick={(event) => validate(event, id, teamName, logo)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:items-center"
            >
              Submit
            </button>
          </div>
        </section>
      </article>
    </Fragment>
  );
};

export default TeamForm;
