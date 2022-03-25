import { useState } from "react";
import classNames from "classnames";
import { parse } from "papaparse";

const save = (list) => {
  list.length <= 0 ? console.log("list is empty") : console.log(list);
};

const CSVReader = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [list, setList] = useState([]);
  const dropZoneClasses = classNames(
    "p-6",
    "my-2",
    "mx-auto",
    "max-w-md",
    "border-2",
    { "border-green-600": highlighted },
    { "bg-green-100": highlighted }
  );

  return (
    <div className="  mb-6 shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 m-20 ">
      <h1 className="text-center text-4xl">Import Player</h1>
      <div
        className={classNames(dropZoneClasses)}
        onDragEnter={() => setHighlighted(true)}
        onDragLeave={() => setHighlighted(false)}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);
          Array.from(e.dataTransfer.files)
            .filter(
              (file) =>
                file.type === "application/vnd.ms-excel" ||
                file.type === "text/csv"
            )
            .forEach(async (file) => {
              const text = await file.text();
              setList(parse(text, { header: true }));
            });
        }}
      >
        DROP HERE
      </div>
      <div className="md:flex md:justify-center mb-6">
        <button
          onClick={() => save(list)}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:items-center"
        >
          Submit
        </button>
      </div>

      {/* i found this component layout i think this is good if you can implementing with your send data */}

      {/* <div class="max-w-xl">
        <label class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
          <span class="flex items-center space-x-2">
            <svg
              xmlns=""
              class="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span class="font-medium text-gray-600">
              Drop files to Attach, or
              <span class="text-blue-600 underline"> browse</span>
            </span>
          </span>
          <input type="file" name="file_upload" class="hidden" />
        </label>
      </div> */}
    </div>
  );
};

export default CSVReader;
