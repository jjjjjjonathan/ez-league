import { Link } from "react-router-dom";
const TeamCards = (props) => {
  const team = props.team;

  return (
    <Link to={`team/${team.id}`}>
      <article className="flex justify-center items-center p-2 ">
        <section className="w-60 bg-gray-50 opacity-50 rounded-xl hover:scale-105 hover:opacity-100 delay-150 hover:duration-1000">
          <img
            src={team.thumbnail_logo}
            alt=""
            className="object-cover mx-auto pt-4"
          />
          <div className="mt-2 bg-gray-200 rounded-b-xl">
            <h1 className="text-center p-2">{team.name}</h1>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default TeamCards;
