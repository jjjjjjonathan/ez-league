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
  return router;
};