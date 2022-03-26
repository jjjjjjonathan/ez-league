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
            <button onClick={() => homeGoalEvent(fixtureId, home.id, 1)}>
              Goal Event 1st Half
            </button>
          </td>
          <td>
            <GiSoccerBall />
          </td>
          <td>
            <button onClick={() => awayGoalEvent(fixtureId, away.id, 1)}>
              Goal Event 1st Half
            </button>
          </td>
        </tr>
        <tr>
          <button onClick={() => homeYellowEvent(fixtureId, home.id, 1)}>
            Yellow Card 1st Half
          </button>
          <td>
            <GiCardPlay className="fill-yellow-500" />
          </td>
          <button onClick={() => awayYellowEvent(fixtureId, away.id, 1)}>
            Yellow Card 1st Half
          </button>
        </tr>
        <tr>
          <button onClick={() => homeRedEvent(fixtureId, home.id, 1)}>
            Red Card 1st Half
          </button>
          <td>
            <GiCardPlay className="fill-red-500" />
          </td>
          <button onClick={() => awayRedEvent(fixtureId, away.id, 1)}>
            Red Card 1st Half
          </button>
        </tr>

        <tr>
          <td>
            <button onClick={() => homeGoalEvent(fixtureId, home.id, 2)}>
              Goal Event 2nd Half
            </button>
          </td>
          <td>
            <GiSoccerBall />
          </td>
          <td>
            <button onClick={() => awayGoalEvent(fixtureId, away.id, 2)}>
              Goal Event 2nd Half
            </button>
          </td>
        </tr>
        <tr>
          <button onClick={() => homeYellowEvent(fixtureId, home.id, 2)}>
            Yellow Card 2nd Half
          </button>
          <td>
            <GiCardPlay className="fill-yellow-500" />
          </td>
          <button onClick={() => awayYellowEvent(fixtureId, away.id, 2)}>
            Yellow Card 2nd Half
          </button>
        </tr>
        <tr>
          <button onClick={() => homeRedEvent(fixtureId, home.id, 2)}>
            Red Card 2nd Half
          </button>
          <td>
            <GiCardPlay className="fill-red-500" />
          </td>
          <button onClick={() => awayRedEvent(fixtureId, away.id, 2)}>
            Red Card 2nd Half
          </button>
        </tr>
      </tbody>
    </table>
  );
};

export default GameConsole;
