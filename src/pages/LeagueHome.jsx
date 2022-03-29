import { useParams } from "react-router-dom";
import NavLeague from "../components/NavLeague";

const dummy = {
  cover_photo:
    "https://www.footballcritic.com/images/general/copy_723x397/fcd77f8a5c11be79dfd2829bd90bb32776b4a889.jpg",
  id: 1,
  logo: "https://w7.pngwing.com/pngs/431/737/png-transparent-2011-12-premier-league-arsenal-f-c-england-english-football-league-sport-arsenal-f-c-sport-team-dog-like-mammal-thumbnail.png",
  name: "Barclays Premier League",
  sport_type_id: 1,
  year: "2011-12",
};

const LeagueHome = (props) => {
  const { state } = props;
  let { id } = useParams();

  const league = state.leagues.find((league) => league.id === parseInt(id, 10));

  return (
    <div className="m-0">
      <h1 className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 my-auto text-center p-5 text-4xl text-white ">
        Welcome to League {league.name}
      </h1>
      <NavLeague id={league.id} />
      <div></div>
    </div>
  );
};

export default LeagueHome;
