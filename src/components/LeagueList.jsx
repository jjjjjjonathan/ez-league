import LeagueListItems from './LeagueListItems';

const LeagueList = (props) => {
  const { leagues } = props;

  const leagueLists = leagues.map((league) => (
    <LeagueListItems
      logo={league.logo}
      name={league.name}
      id={league.id}
      key={league.id}
    />
  ));

  return <div className="container mx-auto">{leagueLists}</div>;
};

export default LeagueList;
