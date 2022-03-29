import { useState } from 'react';
import { parse } from 'papaparse';
import { addBulkTeams } from '../helpers/csvParsers';
import axios from 'axios';

const CSVReader = (props) => {
  const [list, setList] = useState([]);
  const [successList, setSuccessList] = useState([]);
  const [success, setSuccess] = useState(false);
  const { id, setMultipleTeams, teams } = props;

  const save = (list, id, teams, callback) => {
    return axios.put('/api/teams', addBulkTeams(list, id)).then((data) => {
      const newTeamNames = data.data.map((newTeam) => newTeam.name);
      setSuccessList(newTeamNames);
      setSuccess(true);
      callback(data.data, teams);
    });
  };

  return (
    <div className="  mb-6 shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 m-20 ">
      <div className="max-w-xl">
        <label
          className="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            Array.from(e.dataTransfer.files)
              .filter(
                (file) =>
                  file.type === 'application/vnd.ms-excel' ||
                  file.type === 'text/csv'
              )
              .forEach(async (file) => {
                const text = await file.text();
                setList([parse(text, { header: true })]);
              });
          }}
        >
          <span className="flex items-center space-x-2">
            <svg
              xmlns=""
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            ></svg>
            {list.length === 0 && (
              <span className="font-medium text-gray-600">
                Drop files to Attach, or
                <span className="text-blue-600">
                  {' '}
                  click to browse your folders
                </span>
              </span>
            )}
            {list.length > 0 && (
              <span className="font-medium text-gray-600">
                You've added a file, but
                <span className="text-blue-600">
                  {' '}
                  you can replace it with something else
                </span>
              </span>
            )}
          </span>
          <input
            type="file"
            name="file_upload"
            className="hidden"
            onChange={(e) => {
              e.preventDefault();
              Array.from(e.target.files)
                .filter(
                  (file) =>
                    file.type === 'application/vnd.ms-excel' ||
                    file.type === 'text/csv'
                )
                .forEach(async (file) => {
                  const text = await file.text();
                  setList([parse(text, { header: true })]);
                });
            }}
          />
        </label>
      </div>
      <button
        onClick={() => save(list[0].data, id, teams, setMultipleTeams)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:items-center"
      >
        Submit
      </button>
      {success && (
        <p className="text-green-600">
          Congrats, you just added a bunch of teams to the league:{' '}
          {successList.join(', ')}.
        </p>
      )}
    </div>
  );
};

export default CSVReader;
