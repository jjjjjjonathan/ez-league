const express = require("express");
const router = express.Router();

module.exports = db => {
  // Get all sport types to put into state
  router.get('/', (req, res) => {
    return db.query(`SELECT * FROM sport_types;`)
      .then(data => {
        res.json(data.rows);
      });
  });
  return router;
};