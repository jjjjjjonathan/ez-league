import { useState } from 'react';
import axios from 'axios';

const useAdminGameHooks = (fixtureId, fixtures) => {

  const selectedFixture = fixtures.find(fixture => fixture.id === parseInt(fixtureId, 10));

  const [homeScore, setHomeScore] = useState(selectedFixture.home_team_score);
  const [awayScore, setAwayScore] = useState(selectedFixture.away_team_score);

  const updateHomeGoals = (fixtureId, number) => {
    console.log('using jonathans function');
    setHomeScore((prev) => {
      return prev + number < 0 ? 0 : prev + number;
    });

    return axios.put("/api/fixtures/homegoals", {
      score: number > 0 ? homeScore + 1 : (homeScore - 1 < 0 ? 0 : homeScore - 1),
      fixtureId,
    })
      .then(data => {
        console.log(data);
        // update state with data.rows
      });
  };

  return { homeScore, awayScore, updateHomeGoals, setAwayScore };
};

export default useAdminGameHooks;