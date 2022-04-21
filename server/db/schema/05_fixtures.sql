DROP TABLE IF EXISTS fixtures CASCADE;
CREATE TABLE fixtures (
  id SERIAL PRIMARY KEY NOT NULL,
  league_id INTEGER REFERENCES leagues(id) ON DELETE CASCADE NOT NULL,
  home_team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
  away_team_id INTEGER REFERENCES teams(id) ON DELETE CASCADE NOT NULL,
  status VARCHAR(255) DEFAULT 'Upcoming',
  scheduled_time TIMESTAMP,
  first_half_start_time TIMESTAMP,
  second_half_start_time TIMESTAMP,
  home_team_score INTEGER DEFAULT 0,
  away_team_score INTEGER DEFAULT 0
);