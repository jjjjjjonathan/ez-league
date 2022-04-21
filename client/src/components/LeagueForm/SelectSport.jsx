import SelectSportItem from "./SelectSportItem";
import { Fragment } from "react";

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
    <section className="container  m-4">
      <h1 className="ml-2 mb-4">What sport is your league for?</h1>
      <aside className="mx-auto"> {parsedSports}</aside>
    </section>
  );
};

export default SelectSport;
