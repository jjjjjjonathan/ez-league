import { useState } from 'react';
import axios from 'axios';

const useAdminGameHooks = (fixtureId, fixtures) => {


  const selectedFixture = fixtures.find(fixture => fixture.id === parseInt(fixtureId, 10));

  const [gameScore, setGameScore] = useState({
    homeScore: selectedFixture.home_team_score,
    awayScore: selectedFixture.away_team_score
  })

  // const [homeScore, setHomeScore] =
  // useState(selectedFixture.home_team_score);
  // const [awayScore, setAwayScore] = useState(selectedFixture.away_team_score);
  console.log("abc")

  const updateHomeGoals = (fixtureId, number) => {
    console.log('using jonathans function');

    // setHomeScore((prev) => {
    //   return prev + number < 0 ? 0 : prev + number;
    // });

    setGameScore((prev) => {
      return ({
        ...prev,
        homeScore: prev.homeScore + number
      }
      )
    });

    const finalGameScore = {
      score: gameScore.homeScore,
      fixtureId
    }

    console.log("finalscore", finalGameScore)
    // {
    //   score: xyz, fixtureId
    // }


    // console.log(homeScore);
    return axios.put("/api/fixtures/homegoals",
      finalGameScore
    )
      .then(data => {
        //         away_team_id: 2
        // away_team_score: 8
        // first_half_start_time: "2022-03-26T20:12:59.975Z"
        // home_team_id: 1
        // home_team_score: 4
        // id: 1
        // league_id: 1
        // scheduled_time: "2022-03-26T20:12:59.975Z"
        // second_half_start_time: null
        // status: "Upcoming"
        const { id, league_id } = data.data.rows[0]
        console.log("dataArrays", data);
        // update state with data.rows
      });

    // return axios.put("/api/fixtures/homegoals", {
    //   score: number > 0 ? homeScore + 1 : (homeScore - 1 < 0 ? 0 : homeScore - 1),
    //   fixtureId,
    // })
    //   .then(data => {
    //     console.log(data);
    //     // update state with data.rows
    //   });
  };
  return { updateHomeGoals, gameScore }
  // return { homeScore, awayScore, updateHomeGoals, setAwayScore };
};


export default useAdminGameHooks;