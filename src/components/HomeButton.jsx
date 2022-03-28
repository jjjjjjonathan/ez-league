import { Link } from "react-router-dom";
const HomeButton = (props) => {
  return (
    <article className="mt-18 scale-75 sm:scale-100 sm:mt-40  sm:hover:scale-125 m-20 mt-40 md:scale-125  hover:shadow-white duration-300 hover:scale-125 md:hover:scale-150 cursor-pointer">
      <Link to={props.path}>
        <img
          className="object-fit h-48 w-96 rounded-t-md"
          src={props.url}
          alt={props.text}
        />
        <h1 className="text-center bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 text-white rounded-b-md  hover:text-gray-400">
          {props.text}
        </h1>
      </Link>
    </article>
  );
};

export default HomeButton;
