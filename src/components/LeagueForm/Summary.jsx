import { Fragment } from 'react';

const Summary = (props) => {
  const { sports, selectedSport, leagueName } = props;

  const nameOfSport = sports.find((sport) => sport.id === selectedSport);

  return (
    <Fragment>
      <p>
        Your league name is {leagueName} and the sport is {nameOfSport.name}.
        Correct?
      </p>
    </Fragment>
  );
};

export default Summary;
