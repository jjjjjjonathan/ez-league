const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.put("/homegoals", (req, res) => {
    const { score, fixtureId } = req.body;
    return db
      .query(
        "UPDATE fixtures SET home_team_score = $1 WHERE id = $2 RETURNING * ;",
        [score, fixtureId]
      )
      .then((data) => {
        res.status(200).json(data);
      });
  });

  router.put("/awaygoals", (req, res) => {
    const { score, fixtureId } = req.body;
    return db
      .query(
        "UPDATE fixtures SET away_team_score = $1 WHERE id = $2 RETURNING * ;",
        [score, fixtureId]
      )
      .then((data) => {
        res.status(200).json(data);
      });
  });

  // Start halves
  router.put("/start1", (req, res) => {
    const { fixtureId, string } = req.body;
    return db
      .query(
        "UPDATE fixtures SET status = $1, first_half_start_time = NOW() WHERE id = $2 RETURNING *;",
        [string, fixtureId]
      )
      .then((data) => {
        res.status(200).json(data);
      });
  });

  router.put("/start2", (req, res) => {
    const { fixtureId, string } = req.body;
    return db
      .query(
        "UPDATE fixtures SET status = $1, second_half_start_time = NOW() WHERE id = $2 RETURNING *;",
        [string, fixtureId]
      )
      .then((data) => {
        res.status(200).json(data);
      });
  });

  router.put("/end", (req, res) => {
    const { fixtureId, string } = req.body;
    return db
      .query("UPDATE fixtures SET status = $1 WHERE id = $2 RETURNING *;", [
        string,
        fixtureId,
      ])
      .then((data) => {
        res.status(200).json(data);
      });
  });

  router.put("/new_home_goal", (req, res) => {
    const { fixtureId, teamId, time, type, half } = req.body;
    return db
      .query(
        "INSERT INTO fixture_events (fixture_id, team_id, time, fixture_event_type_id, half) VALUES($1,$2,$3,$4,$5) RETURNING *;",
        [fixtureId, teamId, time, type, half]
      )
      .then((data) => {
        res.status(201).json(data);
      });
  });

  router.put("/new_away_goal", (req, res) => {
    const { fixtureId, teamId, time, type, half } = req.body;
    return db
      .query(
        "INSERT INTO fixture_events (fixture_id, team_id, time, fixture_event_type_id, half) VALUES($1,$2,$3,$4,$5) RETURNING *;",
        [fixtureId, teamId, time, type, half]
      )
      .then((data) => {
        res.status(201).json(data);
      });
  });

  router.put("/yellow_home_card", (req, res) => {
    const { fixtureId, teamId, time, type, half } = req.body;
    return db
      .query(
        "INSERT INTO fixture_events (fixture_id, team_id, time, fixture_event_type_id, half) VALUES($1,$2,$3,$4,$5) RETURNING *;",
        [fixtureId, teamId, time, type, half]
      )
      .then((data) => {
        res.status(201).json(data);
      });
  });

  router.put("/red_home_card", (req, res) => {
    const { fixtureId, teamId, time, type, half } = req.body;
    return db
      .query(
        "INSERT INTO fixture_events (fixture_id, team_id, time, fixture_event_type_id, half) VALUES($1,$2,$3,$4,$5) RETURNING *;",
        [fixtureId, teamId, time, type, half]
      )
      .then((data) => {
        res.status(201).json(data);
      });
  });

  router.put("/yellow_away_card", (req, res) => {
    const { fixtureId, teamId, time, type, half } = req.body;
    return db
      .query(
        "INSERT INTO fixture_events (fixture_id, team_id, time, fixture_event_type_id, half) VALUES($1,$2,$3,$4,$5) RETURNING *;",
        [fixtureId, teamId, time, type, half]
      )
      .then((data) => {
        res.status(201).json(data);
      });
  });

  router.put("/red_away_card", (req, res) => {
    const { fixtureId, teamId, time, type, half } = req.body;
    return db
      .query(
        "INSERT INTO fixture_events (fixture_id, team_id, time, fixture_event_type_id, half) VALUES($1,$2,$3,$4,$5) RETURNING *;",
        [fixtureId, teamId, time, type, half]
      )
      .then((data) => {
        res.status(201).json(data);
      });
  });

  // Get whole schedule of all leagues to put into state
  router.get("/", (req, res) => {
    return db
      .query("SELECT * FROM fixtures ORDER BY scheduled_time;")
      .then((data) => {
        res.json(data.rows);
      });
  });

  // Get all fixture events of all leagues to put into state
  router.get("/events", (req, res) => {
    return db
      .query("SELECT * FROM fixture_events ORDER BY time;")
      .then((data) => {
        res.json(data.rows);
      });
  });

  // Goal scored EVENT
  router.put("/events", (req, res) => {
    const { fixtureId, teamId, eventTypeId } = req.body;
    return db
      .query(
        "INSERT INTO fixture_events (fixture_id, team_id, fixture_event_type_id) VALUES ($1, $2, $3) RETURNING *;",
        [fixtureId, teamId, eventTypeId]
      )
      .then((data) => {
        res.status(201).json(data.rows);
      });
  });

  // update event
  router.put("/update_events", (req, res) => {
    const { string, playerId, eventId } = req.body;
    return db
      .query(
        `UPDATE fixture_events SET ${string}  = $1 WHERE id = $2 RETURNING *;`,
        [playerId, eventId]
      )
      .then((data) => {
        res.status(201).json(data.rows);
      });
  });

  // Get all fixture event types
  router.get("/types", (req, res) => {
    return db.query("SELECT * FROM fixture_event_types;").then((data) => {
      res.json(data.rows);
    });
  });

  router.put("/generate", (req, res) => {
    const { queryString, queryParams } = req.body;
    return db.query(queryString, queryParams)
      .then(data => {
        res.status(201).json(data);
      });
  });

  router.delete("/events/:id", (req, res) => {
    return db.query("DELETE FROM fixture_events WHERE id = $1 RETURNING *;", [req.params.id])
      .then(data => {
        res.status(200).json(data.rows);
      });
  });
  return router;
};
