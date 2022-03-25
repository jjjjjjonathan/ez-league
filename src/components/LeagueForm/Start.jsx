import { Fragment } from 'react';

const Start = (props) => {
  const { setLeagueName, onClick, value } = props;
  return (
    <Fragment>
      <div className="md:container md:mx-auto">
        <h1 className="flex items-center justify-center mt-5 text-2xl">
          So I see you're interested in creating a league!
        </h1>
        <h2 className="flex items-center justify-center mt-5">
          What is the name of your league?
        </h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onClick('SPORT');
          }}
        >
          <input
            value={value}
            type="text"
            name="name"
            placeholder="Enter League Name"
            onChange={(event) => setLeagueName(event.target.value)}
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <input
            value="Submit"
            type="submit"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded md:items-center"
          />
        </form>
      </div>
    </Fragment>
  );
};

export default Start;
