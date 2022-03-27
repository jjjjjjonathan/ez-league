import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EventTable from "./GameAdmin/EventTable";

const MatchPage = (props) => {
  const { id } = useParams();
  const { fixtures, teams, players, state } = props;
  const [timer, setTimer] = useState(0);
  const [timerRef, setTimerRef] = useState();
  const startTimer = () => {
    const seconds = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    setTimerRef(seconds);
  };

  const fixture = fixtures.find(fixture => fixture.id === parseInt(id))

  const homeTeam = teams.find(team => team.id === fixture.home_team_id)

  const awayTeam = teams.find(team => team.id === fixture.away_team_id)

  const [timerOn, setTimerOn] = useState(false);

  const [time, setTime] = useState({
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    let timer1;
    if (fixture.status === "First Half") {
      setTimerOn(true);
      timer1 = setInterval(() => {
        let minutes = 0;
        let seconds = Math.floor(
          (Date.now() - Date.parse(fixture.first_half_start_time)) / 1000
        );
        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }
        setTime({
          minutes,
          seconds,
        });
        if (minutes === 45 || fixture.status === "Halftime") {
          setTimerOn(false);
        }
      }, 1000);
    }
    let timer2;

    if (fixture.status === "Second Half") {
      setTimerOn(true);
      timer2 = setInterval(() => {
        let minutes = 0;
        let seconds =
          Math.floor(
            (Date.now() - Date.parse(fixture.second_half_start_time)) / 1000
          ) + 2700;

        if (seconds >= 60) {
          minutes = Math.floor(seconds / 60);
          seconds -= 60 * minutes;
        }

        setTime({
          minutes,
          seconds,
        });

        if (minutes === 90 || fixture.status === "Final") {
          // clearInterval(timer1);
          setTimerOn(false);
        }
      }, 1000);
    }

    if (!timerOn) {
      clearInterval(timer1);
      clearInterval(timer2);
    }

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [
    fixture.status,
    fixture.first_half_start_time,
    fixture.second_half_start_time,
    timerOn,
  ]);

  return (
    <div className="h-screen bg-cover bg-no-repeat bg-center" >
      <div className="container absolute p-4 w-6/12 bg-gray-100 text-center rounded uppercase ">
        <h1>ScoreBoard</h1>
        <div className="title-box">
          <p>Local Team</p>
          <p id="elapsed">{time.minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}:{time.seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}</p>
          <p>Visitor Team</p>
        </div>
        <div className="title-box flex flex-row flex-no-wrap justify-around items-center w-full">
          <div clasName="team w-24">
            {/* <img  id="homeLogo" > */}
            <p id="homeName">{homeTeam.name}</p>
          </div>
          <p id="Score">{fixture.home_team_score}-{fixture.away_team_score}</p>
          <div className="team">
            {/* <img id="awayLogo"> */}
            <p id="awayName">{awayTeam.name}</p>
          </div>
        </div>
        <div className="matchTable" class="matches-table mt-12 flex flex-col">
          <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        </div>  <section>
          <EventTable
            fixtureId={fixture.id}
            firstHalfTime={fixture.first_half_start_time}
            fixtureEvents={state.fixtureEvents}
            eventTypes={state.fixtureTypes}
            teams={state.teams}
            players={state.players}
            fixtureStatus={fixture.status}
            secondHalfTime={fixture.second_half_start_time}
            admin={false}
          />
        </section>
      </div>
    </div>


  );
};


export default MatchPage;