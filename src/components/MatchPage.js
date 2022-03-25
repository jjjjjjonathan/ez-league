import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const MatchPage = (props) => {
  const { id } = useParams();
  const { fixtures, teams, players } = props;
  const [timer, setTimer] = useState(0);
  const [timerRef, setTimerRef] = useState();
  const startTimer = () => {
    const seconds = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    setTimerRef(seconds);
  };

  useEffect(() => {
    const matchId = 6; // FOR TEST PURPOSES WILL HAVE TO CHANGE DYNAMICALLY LATER 
    const route = `/api/fixtures/${matchId}`;
    Promise.all([
      axios.get(route)
    ]).then(all => {
      console.log("----", all);
      // setState(prev => ({
      //   ...prev,
      //   days: all[0].data,
      //   appointments: all[1].data,
      //   interviewers: all[2].data
      // }));
    });
  }, []);

  useEffect(() => {
    if (timer === 10) {
      clearInterval(timerRef);
    }
  }, [timer]);

  //fetching the data
  fetch("DYNAMIC URL GOES HERE", {

    "method": "GET",
    "headers": {
      "x-rapidapi-host": "",
      "x-rapidapi-key": ""
    }
  })
    .then(response => response.json().then(data => {
      console.log(response.body);
    }))
    .catch(err => {
      console.log(err);
    });

  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center" >
      <div className="container absolute p-4 w-6/12 bg-gray-100 text-center rounded uppercase ">
        <h1>ScoreBoard</h1>
        <div className="title-box">
          <p>Local Team</p>
          <p id="elapsed">{timer}</p>
          <button onClick={startTimer}>Start Game</button>
          <p>Visitor Team</p>
        </div>
        <div className="title-box flex flex-row flex-no-wrap justify-around items-center w-full">
          <div clasName="team w-24">
            {/* <img  id="homeLogo" > */}
            <p id="homeName">Team name</p>
          </div>
          <p id="goals">3  -  1</p>
          <div className="team">
            {/* <img id="awayLogo"> */}
            <p id="awayName">Team name</p>
          </div>
        </div>
        <div className="matchTable" class="matches-table mt-12 flex flex-col">
          <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        </div>
      </div>
    </div>

  );
};


export default MatchPage;