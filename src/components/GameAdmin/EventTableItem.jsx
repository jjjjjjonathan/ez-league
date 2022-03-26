const EventTableItem = (props) => {
  const {
    type,
    goalScorer,
    team,
    listOfTeams,
    listOfPlayers,
    value,
    time,
    listOfTypes,
  } = props;

  const findTeamName = (team, listOfTeams) => {
    let selectedTeam = listOfTeams.find((teamList) => teamList.id === team);
    return selectedTeam.name;
  };

  const findEventType = (type, listOfTypes) => {
    let selectedType = listOfTypes.find((typeList) => typeList.id === type);
    return selectedType.name;
  };

  const findPlayerName = (goalScorer, listOfPlayers) => {
    let selectedPlayer = listOfPlayers.find(
      (player) => player.id === goalScorer
    );
    if (goalScorer) {
      return selectedPlayer.name;
    }
    return null;
  };

  return (
    <tr className="bg-white-200 cursor-pointer duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer">
      <td className="py-3 px-6 ">{findTeamName(team, listOfTeams)}</td>
      <td className="py-3 px-6 ">{time}</td>
      <td className="py-3 px-6 ">{findEventType(type, listOfTypes)}</td>
      <td className="py-3 px-6 ">
        {findPlayerName(goalScorer, listOfPlayers)}
      </td>
      <button>Edit</button>
      <button>Delete</button>
    </tr>
  );
};

export default EventTableItem;
