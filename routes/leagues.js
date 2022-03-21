const express = require("express");
const router = express.Router();

module.exports = db => {
  // Select all the leagues, returns id, name, year, logo url, and cover photo url... http://localhost:8001/api/leagues
  router.get('/', (req, res) => {
    return db.query('SELECT * FROM leagues;')
      .then(data => {
        res.json(data.rows);
      });
  });

  // Get all the teams from one league in order of league standings, basically points descending, then goal difference descending... http://localhost:8001/api/leagues/:id

  router.get('/:id', (req, res) => {
    return db.query(`SELECT teams.*,
    teams.wins + teams.draws + teams.losses AS matches_played,
    teams.wins * 3 + teams.draws AS points,
    teams.goals_for - teams.goals_against AS goal_difference
    FROM teams
    WHERE league_id = $1
    ORDER BY points DESC, goal_difference DESC;`, [req.params.id])
      .then(data => {
        res.json(data.rows);
      });
  });

  // Get the schedule for the league from earliest to soonest http://localhost:8001/api/leagues/:id/schedule
  router.get('/:id/fixtures', (req, res) => {
    return db.query(`SELECT fixtures.*
    FROM fixtures
    WHERE league_id = $1
    ORDER BY fixtures.scheduled_time;`, [req.params.id])
      .then(data => {
        res.json(data.rows);
      });
  });

  return router;
};