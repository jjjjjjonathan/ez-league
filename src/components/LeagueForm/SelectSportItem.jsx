const SelectSportItem = (props) => {
  const { value, name, onClick } = props;
  return (
    <button value={value} onClick={() => onClick(value)}>
      {name}
    </button>
  );
};

export default SelectSportItem;
