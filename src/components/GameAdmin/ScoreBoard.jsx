const ScoreBoard = (props) => {
  return (
    <article className="flex flex-row justify-center items-center text-2xl font-mono border-2  border-gray-200 mt-5 ">
      <section className="py-3 px-2 flex flex-row ">
        <p className="sm:w-2/2 lg:w-4/4 p-4 whitespace-nowrap">
          {props.home.name}
        </p>
        <img
          src={props.home.thumbnail_logo}
          alt="team-logo"
          className="object-contain "
        />
      </section>
      <section className="bg-black flex flex-row border-2 text-white border-gray-500 rounded shadow-2xl font-mono  gap-x-px">
        <h1>{props.home.score}</h1>
        <h1>:</h1>
        <h1>{props.home.score}</h1>
      </section>
      <section className="py-3 px-2 flex flex-row  font-mono">
        <img
          src={props.away.thumbnail_logo}
          alt="team-logo"
          className="object-contain "
        />
        <p className="sm:w-2/3 lg:w-3/4 p-4 whitespace-nowrap">
          {props.away.name}
        </p>
      </section>
    </article>
  );
};

export default ScoreBoard;
