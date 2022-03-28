import LeagueListItems from "./LeagueListItems";

const LeagueList = (props) => {
  const { leagues } = props;
  console.log("this is my leagues***", props);

  const leagueLists = leagues.map((league) => (
    <LeagueListItems logo={league.logo} name={league.name} id={league.id} />
  ));

  return <h1>{leagueLists}</h1>;
};

export default LeagueList;
