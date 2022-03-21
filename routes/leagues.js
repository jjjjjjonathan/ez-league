const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get('/', (req, res) => {
    // Select all the leagues, returns id, name, year, logo url, and cover photo url... http://localhost:8001/api/leagues
    return db.query('SELECT * FROM leagues;')
      .then(data => {
        res.json(data.rows);
      });
  });
  return router;
};