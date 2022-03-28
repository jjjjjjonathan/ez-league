import { Fragment } from "react";


const Start = (props) => {
  const { onClick, id, leagues } = props;

  const thisLeague = leagues.find(league => league.id === id);

  return (

    <Fragment>
      <h1>Welcome to the Admin Dashboard for your league: <strong>{thisLeague.name}</strong></h1>
      <p>Here are some options to get you started.</p>
      <button onClick={() => onClick("ADDTEAMS")}>Add Teams</button>
      <p>If you added some teams already, click See Teams to check the table. You can click on each of the teams to go to their respective pages to add players.</p>
      <button onClick={() => onClick("SEETEAMS")}>See Teams</button>
      <p>Once your teams and players are set, click on League Schedule to generate a round robin schedule! Once it's set, you can adjust the dates and times as you want, and each match will be available to start and/or end in the game console for admins!</p>
      <button onClick={() => onClick("SCHEDULE")}>League Schedule</button>

    </Fragment>
  );


};

export default Start;