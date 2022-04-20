import axios from 'axios';

const robin = require('roundrobin');

const ScheduleGenerator = (props) => {
  const validate = (leagueTeams, leagueId) => {
    if (leagueTeams.length >= 2) {
      return axios.put(
        '/api/fixtures/generate',
        scheduleGenerator(robin(leagueTeams.length, leagueTeams), leagueId)
      );
    }
  };

  const scheduleGenerator = (teamArray, leagueId) => {
    let queryString =
      'INSERT INTO fixtures (league_id, home_team_id, away_team_id, scheduled_time) VALUES ';
    let counter = 7;
    let queryParams = [];
    let conditions = [];
    teamArray.forEach((week) => {
      week.forEach((match) => {
        let newQuery = '(';
        queryParams.push(leagueId.toString(10));
        newQuery += `$${queryParams.length.toString(10)}, `;
        queryParams.push(match[0].id.toString(10));
        newQuery += `$${queryParams.length.toString(10)}, `;
        queryParams.push(match[1].id.toString(10));
        newQuery += `$${queryParams.length.toString(
          10
        )}, now() + INTERVAL '${counter} DAYS')`;
        conditions.push(newQuery);
      });
      counter += 7;
    });
    queryString += `${conditions.join(
      ', '
    )} RETURNING *, TO_CHAR(scheduled_time, 'Mon. DD, YYYY') scheduled_date, TO_CHAR(scheduled_time, 'HH24:MI') scheduled_timestamp;`;
    return { queryString, queryParams };
  };

  const { leagueId, leagueTeams, transition } = props;

  return (
    <div>
      <h1>
        You don't seem to have a schedule. Press the button below to generate
        one!
      </h1>
      <button
        className="my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold"
        onClick={() => validate(leagueTeams, leagueId)}
      >
        Generate
      </button>
      <button
        className="mx-3 my-2 px-4 py-2 border-2 border-gray-500 rounded-md bg-gray-400 hover:bg-gray-200 text-gray-800 font-bold"
        onClick={() => transition('START')}
      >
        Go Back
      </button>
    </div>
  );
};

export default ScheduleGenerator;
