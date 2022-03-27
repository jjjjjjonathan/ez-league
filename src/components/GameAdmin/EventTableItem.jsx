import { Fragment } from 'react';

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
    firstHalfTime,
    secondHalfTime,
    fixtureStatus,
    eventHalf,
    admin,
    onClick,
    onClickDelete,
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
    if (
      !playerObj.goalScorer &&
      !playerObj.subIn &&
      !playerObj.yellowCarder &&
      !playerObj.redCarder
    ) {
      return null;
    }
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

  const parsedFirstHalfTime = (time, firstHalfTime) => {
    const timeToReturn = Math.floor(
      (Date.parse(time) - Date.parse(firstHalfTime)) / (1000 * 60)
    );
    return timeToReturn > 45 ? 45 : timeToReturn;
  };

  const parsedSecondHalfTime = (time, secondHalfTime) => {
    const timeToReturn = Math.floor(
      (Date.parse(time) - Date.parse(secondHalfTime)) / (1000 * 60) + 45
    );
    return timeToReturn > 90 ? 90 : timeToReturn;
  };

  return (
    <tr className="bg-white-200 cursor-pointer duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer">
      <td className="py-3 px-6 ">{findTeamName(team, listOfTeams)}</td>
      <td className="py-3 px-6 ">
        {eventHalf === 2
          ? parsedSecondHalfTime(time, secondHalfTime)
          : parsedFirstHalfTime(time, firstHalfTime)}
      </td>
      <td className="py-3 px-6 ">{findEventType(type, listOfTypes)}</td>
      <td className="py-3 px-6 ">
        {findPlayerName(
          { goalScorer, subIn, yellowCarder, redCarder },
          listOfPlayers,
          type
        )}
      </td>
      <td>
        <button
          onClick={(event) => {
            onClick(event, value);
          }}
        >
          Edit
        </button>
      </td>
      <td>
        <button onClick={(event) => onClickDelete(event, value)}>Delete</button>
      </td>
    </tr>
  );
};

export default EventTableItem;
