INSERT INTO fixture_events (fixture_id, team_id, time, event, goal_scorer_id, assist_id)
VALUES (1, 1, now() + INTERVAL '2 minutes', 'goal', 4, 3),
(1, 2, now() + INTERVAL '5 minutes', 'sub', 12, 11);

INSERT INTO fixture_events (fixture_id, team_id, time, event, sub_in_id, sub_out_id)
VALUES (1, 2, now() + INTERVAL '6 minutes', 'sub', 21, 22);