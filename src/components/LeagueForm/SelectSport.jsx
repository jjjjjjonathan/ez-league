import SelectSportItem from './SelectSportItem';
import { Fragment } from 'react';

const SelectSport = (props) => {
  const { sports } = props;

  const parsedSports = sports.map((sport) => (
    <SelectSportItem key={sport.id} value={sport.id} name={sport.name} />
  ));
  return (
    <Fragment>
      <select>{parsedSports}</select>
      <button>Submit</button>
    </Fragment>
  );
};

export default SelectSport;
