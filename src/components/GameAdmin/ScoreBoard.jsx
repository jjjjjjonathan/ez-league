import TeamCards from '../HomeLeagueCards/TeamCards';

const ScoreBoard = (props) => {
  return (
    <article className="text-2xl font-mono border-2  border-gray-200 rounded py-10 bg-black text-white ">
      <h1 className="text-center ">
        {props.timer.minutes.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
        :
        {props.timer.seconds.toLocaleString('en-US', {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </h1>
      <div className="grid grid-cols-6 gap-4 justify-center items-center">
        <section className="py-3 px-2 flex flex-col col-start-1 col-end-3">
          <div className="flex items-center justify-center">
            <img
              src={
                props.home.thumbnail_logo
                  ? props.home.thumbnail_logo
                  : '/images/ez-team.png'
              }
              alt="team-logo"
              className="object-contain mr-2 w-10 h-10 justify-center items-center"
            />
          </div>
          <p className="sm:w-2/2 lg:w-4/4 p-4 whitespace-nowrap mx-auto">
            {props.home.name}
          </p>
        </section>
        <section className="py-3 px-2 flex flex-col col-end-7 col-span-2 font-mono">
          <div className="flex items-center justify-center">
            <img
              src={
                props.away.thumbnail_logo
                  ? props.away.thumbnail_logo
                  : '/images/ez-team.png'
              }
              alt="team-logo"
              className="object-contain mr-2 w-10 h-10 justify-center items-center"
            />
          </div>
          <p className="sm:w-2/2 lg:w-4/4 p-4 whitespace-nowrap mx-auto">
            {props.away.name}
          </p>
        </section>
      </div>
      <section className=" bg-black flex flex-row border-2 text-white border-gray-500 rounded shadow-2xl font-mono  gap-x-px">
        <h1 className="text-center mx-auto">
          {props.home.score} : {props.away.score}
        </h1>
      </section>
    </article>
  );
};

export default ScoreBoard;
