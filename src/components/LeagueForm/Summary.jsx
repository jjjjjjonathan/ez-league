import { Fragment } from 'react';

const Summary = (props) => {
  const { sports, selectedSport, leagueName, startOver, onSubmit } = props;

  const nameOfSport = sports.find((sport) => sport.id === selectedSport);

  return (
    <Fragment>
      <p>
        Your league name is {leagueName} and the sport is {nameOfSport.name}.
        Correct?
      </p>
      <button onClick={() => startOver()}>Start Over</button>
      <button onClick={() => onSubmit(leagueName, selectedSport)}>
        Submit
      </button>
    </Fragment>
  );
};

export default Summary;
