const express = require("express");
const router = express.Router();

module.exports = db => {
  // Get whole schedule of all leagues to put into state
  router.get('/', (req, res) => {
    return db.query('SELECT * FROM fixtures ORDER BY scheduled_time;')
      .then(data => {
        res.json(data.rows);
      });
  });
  // This route should be GET/fixtures/:id
  // router.get('/:id', (req, res) => {

  //   const fixtureId = req.params.id;
  //   console.log("----", fixtureId)
  //   const sqlquery = `
  //     SELECT 
  //     fixtures.home_team_id,
  //     fixtures.home_team_score,
  //     fixtures.away_team_id,
  //     fixtures.away_team_score,
  //     fixtures.scheduled_time, 
  //     home_team.name AS home_team_name,
  //     away_team.name AS away_team_name
  //     FROM fixtures 
  //     INNER JOIN teams AS home_team ON home_team.id = fixtures.home_team_id 
  //     INNER JOIN teams AS away_team ON away_team.id = fixtures.away_team_id 
  //     WHERE fixtures.id = $1
  //     ORDER BY scheduled_time;`
  //   const values = [fixtureId]
  //   // :id = game 2 --> in game 2 ==> home vs away ==> man u v man c
  //   return db.query(sqlquery, values)
  //     .then(data => {
  //       console.log("this is the db query results", data)
  //       res.json(data.rows);
  //     });
  // });
  // Get all fixture events of all leagues to put into state
  router.get('/events', (req, res) => {
    return db.query('SELECT * FROM fixture_events;')
      .then(data => {
        res.json(data.rows);
      });
  });
  // Get all fixture event types
  router.get('/types', (req, res) => {
    return db.query('SELECT * FROM fixture_event_types;')
      .then(data => {
        res.json(data.rows);
      });
  });
  return router;
};