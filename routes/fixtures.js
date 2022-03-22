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
  // Get all fixture events of all leagues to put into state
  router.get('/events', (req, res) => {
    return db.query('SELECT * FROM fixture_events;')
      .then(data => {
        res.json(data.rows);
      });
  });
  return router;
};