import { GiSoccerBall, GiCardPlay } from "react-icons/gi";

const GameConsole = (props) => {
  const {
    updateGoalHome,
    updateGoalAway,
    fixtureId,
    homeGoalEvent,
    awayGoalEvent,
    home,
    away,
    homeRedEvent,
    homeYellowEvent,
    awayRedEvent,
    awayYellowEvent,
  } = props;
  return (
    <table className="mx-auto justify-center items-center text-2xl border-4 border-gray-200 rounded py-10 ">
      <thead>
        <tr>
          <th>Home</th>
          <th>Event</th>
          <th>Away</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <button onClick={() => updateGoalHome(fixtureId, 1)}>
              Goal +1
            </button>
          </td>
          <td>
            <GiSoccerBall className="fill-green-500" />
          </td>
          <td>
            <button onClick={() => updateGoalAway(fixtureId, 1)}>
              Goal +1
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => updateGoalHome(fixtureId, -1)}>
              Goal -1
            </button>
          </td>
          <td>
            <GiSoccerBall className="fill-red-500" />
          </td>
          <td>
            <button onClick={() => updateGoalAway(fixtureId, -1)}>
              Goal -1
            </button>
          </td>
        </tr>
        <tr>
          <td>
            <button onClick={() => homeGoalEvent(fixtureId, home.id)}>
              Goal Event
            </button>
          </td>
          <td>
            <GiSoccerBall />
          </td>
          <td>
            <button onClick={() => awayGoalEvent(fixtureId, away.id)}>
              Goal Event
            </button>
          </td>
        </tr>
        <tr>
          <button onClick={() => homeYellowEvent(fixtureId, home.id)}>
            Yellow Card
          </button>
          <td>
            <GiCardPlay className="fill-yellow-500" />
          </td>
          <button onClick={() => awayYellowEvent(fixtureId, away.id)}>
            Yellow Card
          </button>
        </tr>
        <tr>
          <button onClick={() => homeRedEvent(fixtureId, home.id)}>
            Red Card
          </button>
          <td>
            <GiCardPlay className="fill-red-500" />
          </td>
          <button onClick={() => awayRedEvent(fixtureId, away.id)}>
            Red Card
          </button>
        </tr>
      </tbody>
    </table>
  );
};

export default GameConsole;
