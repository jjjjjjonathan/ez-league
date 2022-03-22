INSERT INTO fixtures (league_id, home_team_id, away_team_id, scheduled_time)
VALUES (1, 1, 2, now() + INTERVAL '1 DAY'),
(1, 3, 4, now() + INTERVAL '2 DAYS'),
(1, 5, 6, now() + INTERVAL '4 DAYS'),
(1, 7, 1, now() + INTERVAL '5 DAYS'),
(1, 8, 9, now() + INTERVAL '6 DAYS'),
(1, 10, 11, now() + INTERVAL '7 DAYS'),
(1, 2, 11, now() + INTERVAL '8 DAYS'),
(1, 10, 3, now() + INTERVAL '9 DAYS');