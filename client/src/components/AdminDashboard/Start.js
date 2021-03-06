const Start = (props) => {
  const { onClick, id, leagues, teams } = props;

  const thisLeague = leagues.find(league => league.id === id);

  const teamsInLeagueCount = teams.filter((team) => team.league_id === id).length;

  return (

    <div className="container mx-auto px-4 border border-black py-6">

      <h1 className="text-xl">Welcome to the Admin Dashboard for your league: <strong>{thisLeague.name}</strong></h1>

      <p>Here are some options to get you started.</p>

      <p className="text-center">---</p>

      <div className="add-teams container px-4 py-3">

        {teamsInLeagueCount > 1 ? <p className="py-3">You seem to already have enough teams in the league, but you can click the button below if you want to add some more.</p> : <p className="py-3">You don't seem to have enough teams in your league yet. Click the button below to add some more.</p>}

        <button className="my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold" onClick={() => onClick("ADDTEAMS")}>Add Teams</button>
      </div>

      <p className="text-center">---</p>

      <div className="see-teams container px-4 py-3">
        <p className="py-3">If you added some teams already, click See Teams to check the table. You can click on each of the teams to go to their respective pages to add players.</p>
        <button className="my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold" onClick={() => onClick("SEETEAMS")}>See Teams</button>
      </div>

      <p className="text-center">---</p>

      <div className="league-schedule container px-4 py-3">

        <p className="py-3">Once your teams and players are set, click on League Schedule to generate a round robin schedule! You will be able to adjust the dates and times as you want, and each match will be available to start and/or end in the game console for admins!</p>
        <button className="my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold" onClick={() => onClick("SCHEDULE")}>League Schedule</button>


      </div>


    </div>


  );


};

export default Start;