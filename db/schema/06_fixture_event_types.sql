DROP TABLE IF EXISTS fixture_event_types CASCADE;
CREATE TABLE fixture_event_types (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL
);