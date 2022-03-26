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
    yellowCarder,
    redCarder,
    subIn,
  } = props;

  const findTeamName = (team, listOfTeams) => {
    let selectedTeam = listOfTeams.find((teamList) => teamList.id === team);
    return selectedTeam.name;
  };

  const findEventType = (type, listOfTypes) => {
    let selectedType = listOfTypes.find((typeList) => typeList.id === type);
    return selectedType.name;
  };

  const findPlayerName = (playerObj, listOfPlayers, type) => {
    console.log(playerObj, type);
    let selectedPlayer = listOfPlayers.find((player) => {
      if (type === 1) {
        return player.id === playerObj.goalScorer;
      } else if (type === 2) {
        return player.id === playerObj.subIn;
      } else if (type === 3) {
        return player.id === playerObj.yellowCarder;
      } else {
        return player.id === playerObj.redCarder;
      }
    });
    return selectedPlayer.name;
  };

  return (
    <tr className="bg-white-200 cursor-pointer duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer">
      <td className="py-3 px-6 ">{findTeamName(team, listOfTeams)}</td>
      <td className="py-3 px-6 ">{time}</td>
      <td className="py-3 px-6 ">{findEventType(type, listOfTypes)}</td>
      <td className="py-3 px-6 ">
        {findPlayerName(
          { goalScorer, subIn, yellowCarder, redCarder },
          listOfPlayers,
          type
        )}
      </td>
      <button>Edit</button>
      <button>Delete</button>
    </tr>
  );
};

export default EventTableItem;
