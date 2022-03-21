const express = require("express");
const router = express.Router();

module.exports = db => {
  // Select players from team of given id
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