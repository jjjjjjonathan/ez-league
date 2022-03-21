const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get('/', async = (req, res) => {
    // Select all the leagues, returns id, name, year, logo url, and cover photo url
    return db.query('SELECT * FROM leagues;')
      .then(data => {
        res.json(data.rows);
      });

  });
  return router;
};