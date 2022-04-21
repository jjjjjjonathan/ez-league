import classNames from "classnames";

const Summary = (props) => {
  const { sports, selectedSport, leagueName, startOver, onSubmit } = props;

  const nameOfSport = sports.find((sport) => sport.id === selectedSport);

  const classes = classNames(
    "bg-gray-400",
    "hover:bg-gray-200",
    "text-gray-800",
    "font-bold",
    "py-2",
    "px-4",
    "mt-4",
    "mr-4",
    "rounded",
    "md:items-center"
  );

  return (
    <section className="m-4">
      <p>
        Your league name is {leagueName} and the sport is {nameOfSport.name}.
        Correct?
      </p>
      <button onClick={() => startOver()} className={classes}>
        Start Over
      </button>
      <button
        onClick={() => onSubmit(leagueName, selectedSport)}
        className={classes}
      >
        Submit
      </button>
    </section>
  );
};

export default Summary;
