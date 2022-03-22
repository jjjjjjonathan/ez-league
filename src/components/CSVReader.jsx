import { useState } from 'react';
import classNames from 'classnames';

const CSVReader = () => {
  const [highlighted, setHighlighted] = useState(false);
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
            .forEach((file) => {
              console.log(file);
            });
        }}
      >
        DROP HERE
      </div>
    </div>
  );
};

export default CSVReader;
