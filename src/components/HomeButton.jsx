import { Link } from "react-router-dom";
const HomeButton = (props) => {
  return (
    <article className="sm:scale-100 mt-20 sm:hover:scale-125 m-20 mt-40 md:scale-125   hover: shadow-2xl  bg-b-100 duration-300 hover: scale-125 md:hover:scale-150 cursor-pointer">
      <Link to={props.path}>
        <img
          className="object-fit h-48 w-96 rounded-t-md"
          src={props.url}
          alt={props.text}
        />
        <h1 className="text-center bg-gray-400 text-white rounded-b-md  hover:text-black">
          {props.text}
        </h1>
      </Link>
    </article>
  );
};

export default HomeButton;
