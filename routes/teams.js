const express = require("express");
const router = express.Router();

module.exports = db => {
  // SELECT ALL TEAMS TO PUT INTO STATE
  router.get('/', (req, res) => {
    return db.query('SELECT * FROM teams;')
      .then(data => {
        res.json(data.rows);
      });
  });

  // Select players from team of given id NEEDS TO BE DELETED
  router.get('/:id', (req, res) => {
    return db.query(`SELECT players.*
    FROM players
    WHERE team_id = $1
    ORDER BY players.minutes DESC;`, [req.params.id])
      .then(data => {
        res.json(data.rows);
      });
  });
  return router;
};