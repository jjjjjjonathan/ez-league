const express = require("express");
const router = express.Router();

module.exports = db => {
  // Get all players into state
  router.get('/', (req, res) => {
    return db.query(`SELECT * FROM players;`)
      .then(data => {
        res.json(data.rows);
      });
  });
  router.put('/add', (req, res) => {
    const { teamId, playerName, shirtNumber } = req.body
    return db.query(`INSERT into players (team_id, name, shirt_number) VALUES($1,$2,$3) RETURNING *;`, [teamId, playerName, shirtNumber])
      .then(data => {
        res.status(201).json(data);
      });
  })
  return router;
};

