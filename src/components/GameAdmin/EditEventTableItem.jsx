import axios from "axios";
import { useState } from "react";

const EditEventTableItem = (props) => {
  const {
    value,
    type,
    goalScorer,
    team,
    listOfTeams,
    listOfPlayers,
    time,
    listOfTypes,
    yellowCarder,
    redCarder,
    subIn,
    firstHalfTime,
    fixtureStatus,
    secondHalfTime,
    eventHalf,
    updateFixturesEvent,
    fixtureEvents,
    setEditEventId,
    onClickBack,
  } = props;

  const submitEventEdit = (event, eventType, eventId, playerId) => {
    event.preventDefault();
    console.log(event.target.value);
    let string = "";
    if (eventType === 1) {
      string = "goal_scorer_id";
    } else if (eventType === 3) {
      string = "yellow_card_id";
    } else if (eventType === 4) {
      string = "red_card_id";
    }
    return axios
      .put("/api/fixtures/update_events", {
        playerId,
        eventId,
        string,
      })
      .then((data) => {
        updateFixturesEvent(fixtureEvents, data.data[0]);
        setSelectedPlayerId(filteredPlayers[0].id);
        setEditEventId(null);
      });
  };

  const selectPlayer = (event) => {
    console.log(event.target.value);
    setSelectedPlayerId(event.target.value);
  };

  const filteredPlayers = listOfPlayers.filter(
    (player) => player.team_id === team
  );

  const mapPlayers = filteredPlayers.map((player) => {
    return <option value={player.id}>{player.name}</option>;
  });

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
  const [selectedPlayerId, setSelectedPlayerId] = useState(
    filteredPlayers[0].id
  );

  return (
    <tr className="bg-white-200 cursor-pointer duration-300 hover:bg-b-100 hover:scale-105 cursor-pointer">
      <td className="py-3 px-6 ">{findTeamName(team, listOfTeams)}</td>
      <td className="py-3 px-6 ">
        {eventHalf === 2
          ? Math.floor(
              (Date.parse(time) - Date.parse(secondHalfTime)) / (1000 * 60)
            ) + 45
          : Math.floor(
              (Date.parse(time) - Date.parse(firstHalfTime)) / (1000 * 60)
            )}
      </td>
      <td className="py-3 px-6 ">{findEventType(type, listOfTypes)}</td>
      <td className="py-3 px-6 ">
        <select onChange={(event) => selectPlayer(event)}>{mapPlayers}</select>
      </td>
      <td>
        <button
          onClick={(event) =>
            submitEventEdit(event, type, value, selectedPlayerId)
          }
        >
          Submit
        </button>
      </td>
      <td>
        <button onClick={onClickBack}>Back</button>
      </td>
    </tr>
  );
};

export default EditEventTableItem;
