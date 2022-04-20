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

  // Add new leagues
  router.put('/', (req, res) => {
    const { leagueName, sport } = req.body;
    return db.query(`INSERT INTO leagues (name, sport_type_id) VALUES ($1, $2) RETURNING *;`, [leagueName, sport.toString(10)])
      .then((data) => {
        req.io.emit("UPDATESTATE", { type: 'CREATE_NEW_LEAGUE', content: data.rows[0] });
        res.status(201).json(data.rows);
      })
      .catch(error => console.log(error));
  });

  return router;
};