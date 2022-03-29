const playersLeagueGenerator = (leagueId, teams, players) => {
  const playerInLeague = [];

  const leagueTeam = teams.filter((team) => team.league_id === leagueId);

  for (const team of leagueTeam) {
    let eachTeamPlayer = players.filter((player) => player.team_id === team.id);
    playerInLeague.push(...eachTeamPlayer);
  }
  return playerInLeague;
};

export default playersLeagueGenerator;
