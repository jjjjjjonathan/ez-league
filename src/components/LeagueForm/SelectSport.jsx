import SelectSportItem from './SelectSportItem';
import { Fragment } from 'react';

const SelectSport = (props) => {
  const { sports, onClick } = props;

  const parsedSports = sports.map((sport) => (
    <SelectSportItem
      key={sport.id}
      value={sport.id}
      name={sport.name}
      onClick={onClick}
    />
  ));
  return (
    <Fragment>
      <h1>What sport is your league for?</h1>
      {parsedSports}
    </Fragment>
  );
};

export default SelectSport;
