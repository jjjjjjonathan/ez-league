const SelectSportItem = (props) => {
  const { value, name } = props;
  return <option value={value}>{name}</option>;
};

export default SelectSportItem;
