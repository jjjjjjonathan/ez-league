import axios from 'axios';
import { useState, Fragment } from 'react';

const PlayerForm = (props) => {
  const { id, players, transition } = props;
  const [playerName, setPlayerName] = useState('');
  const [shirtNumber, setShirtNumber] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [successName, setSuccessName] = useState('');

  const submit = (event) => {
    event.preventDefault();
  };

  const save = (teamId, playerName, shirtNumber) => {
    axios
      .put('/api/players/add', { teamId, playerName, shirtNumber })
      .then((data) => {
        setSuccess(true);
        setSuccessName(playerName);
        setPlayerName('');
      });
  };
  const validate = (event, teamId, playerName, shirtNumber) => {
    event.preventDefault();
    if (playerName) {
      save(teamId, playerName, shirtNumber);
    }
  };

  return (
    <Fragment>
      <article className="flex justify-center mt-10 ">
        <section className="w-full max-w-sm flex-col">
          <form
            autoComplete="off"
            onSubmit={submit}
            className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Player Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Player Name"
                onChange={(event) => setPlayerName(event.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              />
            </div>
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Add Shirt Number
              </label>
              <input
                type="text"
                name="Jersey"
                placeholder="Enter a shirt number"
                onChange={(event) =>
                  setShirtNumber(
                    event.target.value.length === 0 ? null : event.target.value
                  )
                }
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              />
            </div>
            {success && (
              <p className="text-green-600">
                Congrats you just added {successName} to the team!
              </p>
            )}
          </form>
          <div className="md:flex md:justify-center mb-6">
            <button
              onClick={(event) => validate(event, id, playerName, shirtNumber)}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:items-center"
            >
              Submit
            </button>
            <button
              onClick={() => transition('ADDBULK')}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:items-center"
            >
              Add Bulk
            </button>
          </div>
        </section>
      </article>
    </Fragment>
  );
};

export default PlayerForm;
