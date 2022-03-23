import { useState } from 'react';
import { parse } from 'papaparse';

const save = (list) => {
  list.length <= 0 ? console.log('list is empty') : console.log(list[0].data);
};

const CSVReader = () => {
  const [list, setList] = useState([]);

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
        onClick={() => save(list)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:items-center"
      >
        Submit
      </button>
    </div>
  );
};

export default CSVReader;
