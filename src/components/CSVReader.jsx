import { useState } from 'react';
import classNames from 'classnames';
import { parse } from 'papaparse';

const save = (list) => {
  list.length <= 0 ? console.log('list is empty') : console.log(list);
};

const CSVReader = () => {
  const [highlighted, setHighlighted] = useState(false);
  const [list, setList] = useState([]);
  const dropZoneClasses = classNames(
    'p-6',
    'my-2',
    'mx-auto',
    'max-w-md',
    'border-2',
    { 'border-green-600': highlighted },
    { 'bg-green-100': highlighted }
  );

  return (
    <div>
      <h1 className="text-center text-4xl">Contact Import</h1>
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
                file.type === 'application/vnd.ms-excel' ||
                file.type === 'text/csv'
            )
            .forEach(async (file) => {
              const text = await file.text();
              setList(parse(text, { header: true }));
            });
        }}
      >
        DROP HERE
      </div>
      <button onClick={() => save(list)}>Submit</button>
    </div>
  );
};

export default CSVReader;
