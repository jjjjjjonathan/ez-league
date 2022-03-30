import { useParams } from "react-router-dom";
import ScheduleListItems from "../components/ClientSchedule/ScheduleListItems";
import PlayerListItem from "../components/PlayerListItem";
const TeamProfile = (props) => {
  const { teams, players, fixtures } = props.state;
  const { id } = useParams();

  const club = teams.find((team) => team.id === parseInt(id));
  const leagueFixtures = fixtures.filter(
    (fixture) => fixture.league_id === club.league_id
  );
  const clubFixtures = leagueFixtures.filter(
    (fixture) =>
      (fixture.home_team_id === club.id || fixture.away_team_id === club.id) &&
      fixture.status === "Upcoming"
  );
  const clubPlayers = players.filter((player) => player.team_id === club.id);
  console.log("this is clubfixture", clubFixtures);

  const games = clubFixtures.map((game) => {
    return <ScheduleListItems game={game} teams={teams} />;
  });
  const teamPlayers = clubPlayers.map((player) => {
    return (
      <PlayerListItem
        key={player.id}
        name={player.name}
        shirtNumber={player.shirt_number}
        goals={player.goals}
        yellowCards={player.yellow_cards}
        redCards={player.red_cards}
        photoUrl={player.photo_url ? player.photo_url : "/images/lego.png"}
      />
    );
  });

  return (
    <article>
      <h1 className="bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 my-auto text-center p-5 text-4xl text-white">
        {club.name.toUpperCase()}
      </h1>
      <section className="grid grid-cols-1 sm:grid-cols-2">
        <aside className="container">
          <h1 className="text-center text-gray-600 text-2xl mt-4">
            Upcoming Games
          </h1>
          {games}
        </aside>
        <aside>
          <table className="container m-5 mx-auto rounded-sm text-gray-600">
            <thead className="text-center bg-gray-400 rounded-sm">
              <tr>
                <th className="text-center">Image</th>
                <th className="text-center">Shirt Number</th>
                <th className="text-center">Name</th>
                <th className="text-center">Goals</th>
                <th className="text-center">Yellow Cards</th>
                <th className="text-center">Red Cards</th>
              </tr>
            </thead>
            <tbody>{teamPlayers}</tbody>
          </table>
        </aside>
      </section>
    </article>
  );
};

export default TeamProfile;
