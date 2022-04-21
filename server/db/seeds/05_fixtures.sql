INSERT INTO fixtures (league_id, home_team_id, away_team_id, scheduled_time, first_half_start_time)
VALUES (1, 1, 2, now() - INTERVAL '20 MINUTES', now() - INTERVAL '20 MINUTES'),
(1, 3, 4, now() + INTERVAL '2 DAYS', null),
(1, 5, 6, now() + INTERVAL '4 DAYS', null),
(1, 7, 1, now() + INTERVAL '5 DAYS', null),
(1, 8, 9, now() + INTERVAL '6 DAYS', null),
(1, 10, 11, now() + INTERVAL '7 DAYS', null),
(1, 2, 11, now() + INTERVAL '8 DAYS', null),
(1, 10, 3, now() + INTERVAL '9 DAYS', null);