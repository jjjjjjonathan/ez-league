INSERT INTO fixture_events (fixture_id, team_id, time, fixture_event_type_id, goal_scorer_id, assist_id, sub_in_id, sub_out_id, yellow_card_id, red_card_id, half)
VALUES (1, 1, now() - INTERVAL '2 minutes', 1, 4, 3, null, null, null, null, 1),
(1, 2, now() - INTERVAL '5 minutes', 1, 12, 11, null, null, null, null, 1),
(1, 2, now() - INTERVAL '6 minutes', 2, null, null, 21, 22, null, null, 1),
(1, 2, now() - INTERVAL '10 minutes', 3, null, null, null, null, 5, null, 1),
(1, 2, now() - INTERVAL '15 minutes', 4, null, null, null, null, null, 6, 1);