const ScheduleListItems = (props) => {
  const { game, teams } = props;
  console.log(teams);

  const homeTeam = teams.find((team) => game.home_team_id === team.id);
  const awayTeam = teams.find((team) => game.away_team_id === team.id);
  const gameTime = new Date(game.scheduled_time);
  const today = new Date();

  console.log("this is gameTimeHours", gameTime.getHours());

  return (
    <article className="m-2 p-2 text-white">
      <section className="m-2">
        <h1>{gameTime.toDateString("DD-M-YYYY")}</h1>
      </section>
      <section className="flex flex-row m-2 py-5 border-solid border-y border-gray-600  m-2 bg-gradient-to-r from-gray-400 via-gray-800 to-gray-600 text-white rounded  mx-auto duration-300 hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-white m-2">
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
        {gameTime.toDateString < today.toISOString ? (
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
          className="mx-2"
        />
      </section>
    </article>
  );
};

export default ScheduleListItems;
