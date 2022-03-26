import { GiSoccerBall, GiCardPlay } from "react-icons/gi";

const GameConsole = (props) => {
  console.log("this props gameconsole", props);
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
            <button onClick={() => props.updateGoalHome(props.fixtureId)}>
              Goal
            </button>
          </td>
          <td>
            <GiSoccerBall />
          </td>
          <td>
            <button onClick={() => props.updateGoalAway(props.fixtureId)}>
              Goal
            </button>
          </td>
        </tr>
        <tr>
          <td>Yellow Card</td>
          <td>
            <GiCardPlay className="fill-yellow-500" />
          </td>
          <td>Yellow Card</td>
        </tr>
        <tr>
          <td>Red Card</td>
          <td>
            <GiCardPlay className="fill-red-500" />
          </td>
          <td>Red Card</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GameConsole;
