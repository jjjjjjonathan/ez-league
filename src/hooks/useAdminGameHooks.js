import { useState } from 'react';
import axios from 'axios';

const useAdminGameHooks = (fixtureId, state, setState) => {

  const { fixtures } = state;


  const selectedFixture = fixtures.find(fixture => fixture.id === parseInt(fixtureId, 10));

  const [gameScore, setGameScore] = useState({
    homeScore: selectedFixture.home_team_score,
    awayScore: selectedFixture.away_team_score
  })
  console.log("abc")

  const updateHomeGoals = (fixtureId, number) => {
    console.log('using jonathans function');

    const finalGameScore = {
      score: gameScore.homeScore + number >= 0 ? gameScore.homeScore + number : 0,
      fixtureId
    }
    console.log("finalscore", finalGameScore)

    return axios.put("/api/fixtures/homegoals",
      finalGameScore
    )
      .then(data => {
        const { id, league_id, home_team_score, away_team_score } = data.data.rows[0]
        setGameScore((prev) => {
          return ({
            ...prev,
            homeScore: home_team_score
          })
        });
        setState(prev => {
          return ({
            ...prev,
            gameScore: {
              homeScore: home_team_score,
              awayScore: away_team_score,
            },
          })
        })
        console.log("dataArrays", data);
      });
  };

  const updateAwayGoals = (fixtureId, number) => {
    console.log('using jonathans function');


    const finalGameScore = {
      score: gameScore.awayScore + number >= 0 ? gameScore.awayScore + number : 0,
      fixtureId
    }
    console.log("finalscore", finalGameScore)

    return axios.put("/api/fixtures/awaygoals",
      finalGameScore
    )
      .then(data => {
        const { id, league_id, away_team_score, home_team_score } = data.data.rows[0]
        setGameScore((prev) => {
          return ({
            ...prev,
            awayScore: away_team_score
          })
        });
        setState(prev => {
          return ({
            ...prev,
            gameScore: {
              homeScore: home_team_score,
              awayScore: away_team_score,
            }
          })
        })

        console.log("dataArrays", data);
      });
  };

  return { updateHomeGoals, updateAwayGoals, gameScore }
};


export default useAdminGameHooks;