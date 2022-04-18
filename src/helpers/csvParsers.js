const addBulkTeams = (csv, leagueId) => {
  let queryString = "INSERT INTO teams (league_id, name, thumbnail_logo) VALUES ";
  csv.pop();
  let queryParams = [];
  let conditions = [];
  csv.forEach(newTeam => {
    let newQuery = '(';
    queryParams.push(leagueId.toString(10));
    newQuery += `$${queryParams.length.toString(10)}, `;
    queryParams.push(newTeam.name);
    newQuery += `$${queryParams.length.toString(10)}, `;
    queryParams.push((newTeam.logo.length === 0) ? null : newTeam.logo);
    newQuery += `$${queryParams.length.toString(10)})`;
    conditions.push(newQuery);
  });
  queryString += `${conditions.join(', ')} RETURNING *;`;
  return { queryString, queryParams };
};

const addBulkPlayers = (csv, teamId) => {
  let queryString = "INSERT INTO players (team_id, name, shirt_number) VALUES ";
  csv.pop();
  let queryParams = [];
  let conditions = [];
  csv.forEach(newPlayer => {
    let newQuery = '(';
    queryParams.push(teamId);
    newQuery += `$${queryParams.length.toString(10)}, `;
    queryParams.push(newPlayer.name);
    newQuery += `$${queryParams.length.toString(10)}, `;
    queryParams.push((newPlayer.number.length === 0) ? null : parseInt(newPlayer.number, 10));
    newQuery += `$${queryParams.length.toString(10)})`;
    conditions.push(newQuery);
  });
  queryString += `${conditions.join(', ')} RETURNING *;`;
  return { queryString, queryParams };
};

module.exports = { addBulkTeams, addBulkPlayers };