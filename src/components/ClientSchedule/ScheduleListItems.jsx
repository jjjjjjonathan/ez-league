const ScheduleListItems = (props) => {
  const { game, teams } = props;
  console.log(teams);

  const homeTeam = teams.find((team) => game.home_team_id === team.id);
  const awayTeam = teams.find((team) => game.away_team_id === team.id);

  return (
    <article className="m-2 p-2 text-white">
      <section className="m-2 flex flex-row">
        <h1 className="text-gray-800">{game.scheduled_date}</h1>

        <div className="flex flex-row ml-2 text-gray-800">
          {game.status === "Upcoming" && (
            <section>
              <h1> - {game.scheduled_timestamp}</h1>
            </section>
          )}
          {(game.status === "First Half" ||
            game.status === "Halftime" ||
            game.status === "Second Half") && (
            <section>
              <h1> - Ongoing</h1>
            </section>
          )}
          {game.status === "Final" && (
            <section>
              <h1> - FT</h1>
            </section>
          )}
        </div>
      </section>
      <section className="flex flex-row m-2 py-5 m-2 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600  text-white rounded  mx-auto duration-300 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-white m-2 ">
        <img
          src={
            homeTeam.thumbnail_logo
              ? homeTeam.thumbnail_logo
              : "/images/ez-team.png"
          }
          alt=""
          className="mx-2"
        />
        <p>{homeTeam.name}</p>
        {game.status !== "Upcoming" ? (
          <aside className="flex flex-row bg-gray-400 mx-1 px-2 rounded-sm">
            <p>{game.home_team_score}</p>
            <p className="mx-px">:</p>
            <p>{game.away_team_score}</p>
          </aside>
        ) : (
          <aside className="flex flex-row bg-gray-400 mx-1 px-2 rounded-sm">
            <p>T</p>
            <p className="mx-px">B</p>

            <p>C</p>
          </aside>
        )}

        <p>{awayTeam.name}</p>
        <img
          src={
            awayTeam.thumbnail_logo
              ? awayTeam.thumbnail_logo
              : "/images/ez-team.png"
          }
          alt=""
          className="mx-2 "
        />
      </section>
    </article>
  );
};

export default ScheduleListItems;
