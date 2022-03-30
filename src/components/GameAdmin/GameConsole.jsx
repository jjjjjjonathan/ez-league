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
    <table className="mx-auto px-2 justify-center items-center text-2xl border-4 border-gray-200 rounded-lg py-10 ">
      <thead className="bg-gray-400 mx-auto justify-center items-center text-2xl border-4 border-gray-200 rounded-lg py-10 ">
        <tr>
          <th>Home</th>
          <th>Event</th>
          <th>Away</th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => updateGoalHome(fixtureId, 1)}
              className="hover:bg-gray-400"
            >
              Goal +1
            </button>
          </td>
          <td className="py-3 px-8 ">
            <GiSoccerBall className="fill-green-500 " />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => updateGoalAway(fixtureId, 1)}
              className="hover:bg-gray-400"
            >
              Goal +1
            </button>
          </td>
        </tr>
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => updateGoalHome(fixtureId, -1)}
              className="hover:bg-gray-400"
            >
              Goal -1
            </button>
          </td>
          <td className="py-3 px-8">
            <GiSoccerBall className="fill-red-500" />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => updateGoalAway(fixtureId, -1)}
              className="hover:bg-gray-400"
            >
              Goal -1
            </button>
          </td>
        </tr>
      </tbody>
      <tbody></tbody>
      <td></td>
      <th>1st-Half</th>
      <tbody>
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => homeGoalEvent(fixtureId, home.id, 1)}
              className="hover:bg-gray-400"
            >
              Goal Event
            </button>
          </td>
          <td className="py-3 px-8">
            <GiSoccerBall />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => awayGoalEvent(fixtureId, away.id, 1)}
              className="hover:bg-gray-400"
            >
              Goal Event
            </button>
          </td>
        </tr>
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => homeYellowEvent(fixtureId, home.id, 1)}
              className="hover:bg-gray-400"
            >
              Yellow Card
            </button>
          </td>

          <td className="py-3 px-8">
            <GiCardPlay className="fill-yellow-500" />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => awayYellowEvent(fixtureId, away.id, 1)}
              className="hover:bg-gray-400"
            >
              Yellow Card
            </button>
          </td>
        </tr>
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => homeRedEvent(fixtureId, home.id, 1)}
              className="hover:bg-gray-400"
            >
              Red Card
            </button>
          </td>
          <td className="py-3 px-8">
            <GiCardPlay className="fill-red-500" />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => awayRedEvent(fixtureId, away.id, 1)}
              className="hover:bg-gray-400"
            >
              Red Card
            </button>
          </td>
        </tr>
      </tbody>
      <td></td>
      <th>2nd-Half</th>
      <tbody>
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => homeGoalEvent(fixtureId, home.id, 2)}
              className="hover:bg-gray-400"
            >
              Goal Event
            </button>
          </td>
          <td className="py-3 px-8">
            <GiSoccerBall />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => awayGoalEvent(fixtureId, away.id, 2)}
              className="hover:bg-gray-400"
            >
              Goal Event
            </button>
          </td>
        </tr>
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => homeYellowEvent(fixtureId, home.id, 2)}
              className="hover:bg-gray-400"
            >
              Yellow Card
            </button>
          </td>
          <td className="py-3 px-8">
            <GiCardPlay className="fill-yellow-500" />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => awayYellowEvent(fixtureId, away.id, 2)}
              className="hover:bg-gray-400"
            >
              Yellow Card
            </button>
          </td>
        </tr>
        <tr className="bg-gray-100 ">
          <td className="py-3 px-8">
            <button
              onClick={() => homeRedEvent(fixtureId, home.id, 2)}
              className="hover:bg-gray-400"
            >
              Red Card
            </button>
          </td>
          <td className="py-3 px-8">
            <GiCardPlay className="fill-red-500" />
          </td>
          <td className="py-3 px-8">
            <button
              onClick={() => awayRedEvent(fixtureId, away.id, 2)}
              className="hover:bg-gray-400"
            >
              Red Card
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GameConsole;
