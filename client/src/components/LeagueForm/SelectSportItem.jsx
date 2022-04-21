import classNames from "classnames";

const SelectSportItem = (props) => {
  const selectSportClasses = classNames(
    "bg-gray-400",
    "hover:bg-gray-400",
    "text-gray-800",
    "font-bold",
    "py-2",
    "px-4",
    "rounded",
    "m-2",
    "justify-center",
    "hover:bg-gray-200",
    "md:items-center"
  );

  const { value, name, onClick } = props;
  return (
    <button
      value={value}
      onClick={() => onClick(value)}
      className={selectSportClasses}
      disabled={value !== 1}
    >
      {name}
    </button>
  );
};

export default SelectSportItem;
