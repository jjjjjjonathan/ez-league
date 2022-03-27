const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // SELECT ALL TEAMS TO PUT INTO STATE
  router.get("/", (req, res) => {
    return db.query("SELECT * FROM teams;").then((data) => {
      res.json(data.rows);
    });
  });

  // Put create new teams route here

  router.put("/", (req, res) => {
    const { queryString, queryParams } = req.body;
    return db.query(queryString, queryParams).then((data) => {
      res.status(201).json(data.rows);
    });
  });

  router.put("/wins", (req, res) => {
    const { wins, goalsFor, goalsAgainst, teamId } = req.body;
    return db
      .query(
        `UPDATE teams SET wins = $1, goals_for = $2, goals_against= $3 WHERE id = $4 RETURNING *;`,
        [wins, goalsFor, goalsAgainst, teamId]
      )
      .then((data) => {
        res.status(200).json(data);
      });
  });

  router.put("/losses", (req, res) => {
    const { losses, goalsFor, goalsAgainst, teamId } = req.body;
    return db
      .query(
        `UPDATE teams SET losses = $1, goals_for = $2, goals_against= $3 WHERE id = $4 RETURNING *;`,
        [losses, goalsFor, goalsAgainst, teamId]
      )
      .then((data) => {
        res.status(200).json(data);
      });
  });

  router.put("/draws", (req, res) => {
    const { draws, goalsFor, goalsAgainst, teamId } = req.body;
    return db
      .query(
        `UPDATE teams SET draws = $1, goals_for = $2, goals_against= $3 WHERE id = $4 RETURNING *;`,
        [draws, goalsFor, goalsAgainst, teamId]
      )
      .then((data) => {
        res.status(200).json(data);
      });
  });

  router.put("/add", (req, res) => {
    const { leagueId, teamName, logo } = req.body;
    return db.query("INSERT INTO teams (league_id, name, thumbnail_logo) VALUES ($1, $2, $3) RETURNING *;", [leagueId, teamName, logo])
      .then(data => {
        res.status(201).json(data);
      });
  });

  // Select players from team of given id NEEDS TO BE DELETED
  router.get("/:id", (req, res) => {
    return db
      .query(
        `SELECT players.*
    FROM players
    WHERE team_id = $1
    ORDER BY players.minutes DESC;`,
        [req.params.id]
      )
      .then((data) => {
        res.json(data.rows);
      });
  });
  return router;
};
