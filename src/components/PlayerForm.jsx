import axios from 'axios';
import { useState, Fragment } from 'react';

const PlayerForm = (props) => {
  const { id, set1Player, players } = props;
  const [playerName, setPlayerName] = useState('');
  const [shirtNumber, setShirtNumber] = useState(null);
  const submit = (event) => {
    event.preventDefault();
  };

  const save = (teamId, playerName, shirtNumber) => {
    axios.put('/api/players/add', { teamId, playerName, shirtNumber }).then((data) => {
      console.log(data)
      set1Player(players, data.data.rows[0]);
    });
  };
  const validate = (event, teamId, playerName, shirtNumber) => {
    event.preventDefault();
    console.log('validating...');
    if (playerName) {
      console.log('saving...');
      save(teamId, playerName, shirtNumber);
    }
  };

  return (
    <Fragment>
      <h1 className="flex items-center justify-center mt-5 text-2xl ">
        Add Your Player
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
          </form>
          <div className="md:flex md:justify-center mb-6">
            <button
              onClick={(event) => validate(event, id, playerName, shirtNumber)}
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

export default PlayerForm;
