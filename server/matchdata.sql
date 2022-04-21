SELECT 
fixtures.home_team_id,
fixtures.home_team_score,
fixtures.away_team_id,
fixtures.away_team_score,
fixtures.scheduled_time, 
home_team.name AS home_team_name,
away_team.name AS away_team_name
FROM fixtures 
INNER JOIN teams AS home_team ON home_team.id = fixtures.home_team_id 
INNER JOIN teams AS away_team ON away_team.id = fixtures.away_team_id 
WHERE fixtures.id = 6
ORDER BY scheduled_time;