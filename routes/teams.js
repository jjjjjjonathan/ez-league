const express = require("express");
const router = express.Router();

module.exports = (db) => {
  // SELECT ALL TEAMS TO PUT INTO STATE
  router.get("/", (req, res) => {
    return db.query(`SELECT teams.*,
    teams.wins + teams.draws + teams.losses AS matches_played,
    teams.wins * 3 + teams.draws AS points,
    teams.goals_for - teams.goals_against AS goal_difference
    FROM teams
    ORDER BY points DESC, goal_difference DESC, goals_for DESC;`
    ).then((data) => {
      res.json(data.rows);
    });
  });

  // Put create new teams route here

  router.put("/", (req, res) => {
    const { queryString, queryParams } = req.body;
    return db.query(queryString, queryParams).then((data) => {
      req.io.emit("UPDATESTATE", { type: "ADD_NEW_TEAMS", content: data.rows });
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
        req.io.emit("UPDATESTATE", { type: "UPDATE_TEAMS_RESULTS", content: data.rows[0] });
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
        req.io.emit("UPDATESTATE", { type: "UPDATE_TEAMS_RESULTS", content: data.rows[0] });
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
        req.io.emit("UPDATESTATE", { type: "UPDATE_TEAMS_RESULTS", content: data.rows[0] });
        res.status(200).json(data);
      });
  });

  router.put("/add", (req, res) => {
    const { leagueId, teamName, logo } = req.body;
    return db.query("INSERT INTO teams (league_id, name, thumbnail_logo) VALUES ($1, $2, $3) RETURNING *;", [leagueId, teamName, logo])
      .then(data => {
        req.io.emit("UPDATESTATE", { type: "ADD_NEW_TEAMS", content: data.rows });
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
