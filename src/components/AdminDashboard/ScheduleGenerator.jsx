import axios from 'axios';

const robin = require('roundrobin');

const ScheduleGenerator = (props) => {
  const validate = (leagueTeams, leagueId) => {
    if (leagueTeams.length >= 2) {
      console.log('Validated');
      return axios
        .put(
          '/api/fixtures/generate',
          scheduleGenerator(robin(leagueTeams.length, leagueTeams), leagueId)
        )
        .then((data) => {
          addNewFixtures(fixtures, data.data.rows);
        });
    } else {
      console.log('Rejected');
    }
  };

  const scheduleGenerator = (teamArray, leagueId) => {
    let queryString =
      'INSERT INTO fixtures (league_id, home_team_id, away_team_id) VALUES ';
    // let counter = 7;
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
        newQuery += `$${queryParams.length.toString(10)})`;
        // queryParams.push(`now() + INTERVAL '${counter.toString(10)} DAYS'`);
        // newQuery += `$${queryParams.length.toString(10)})`;
        conditions.push(newQuery);
      });
      // counter += 7;
    });
    queryString += `${conditions.join(', ')} RETURNING *;`;
    console.log(queryString, queryParams);
    return { queryString, queryParams };
  };

  const { leagueId, leagueTeams, addNewFixtures, fixtures } = props;

  return (
    <div>
      <h1>
        You don't seem to have a schedule. Press the button below to generate
        one!
      </h1>
      <button onClick={() => validate(leagueTeams, leagueId)}>Generate</button>
    </div>
  );
};

export default ScheduleGenerator;
