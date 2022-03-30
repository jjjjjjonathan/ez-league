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
    <article className="flex flex-col justify-center items-center text-2xl font-mono border-2  border-gray-200 rounded py-10 bg-black text-white ">

      <section className="mx-auto justify-center items-center text-2xl ">
        <div className="h-screen bg-cover bg-no-repeat bg-center" >
          <div className="mx-auto justify-center items-center text-2xl border-4 border-gray-200 rounded-lg py-10 ">
            <section className="text-6xl text-white font-mono gap-x-px mx-auto">
              <p className="text-center">{time.minutes.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}:{time.seconds.toLocaleString('en-US', {
                minimumIntegerDigits: 2,
                useGrouping: false,
              })}</p>
            </section>

            <div className="title-box flex flex-row flex-no-wrap justify-around items-center w-full">
              <section className="py-3 px-2 flex flex-row ">
                <img
                  src={homeTeam.thumbnail_logo}
                  alt="team-logo"
                  className="object-contain mr-2"
                />
                <p className="sm:w-2/2 lg:w-4/4 p-4 whitespace-nowrap">
                  {homeTeam.name}
                </p>
              </section>
              <p id="Score">
                {fixture.home_team_score}:{fixture.away_team_score}</p>
              <div className="team">
                <div className="py-3 px-2 flex flex-row  font-mono">
                  <img
                    src={awayTeam.thumbnail_logo}
                    alt="team-logo"
                    className="object-contain ml-2"
                  />
                  <p className="sm:w-2/3 lg:w-3/4 p-4 whitespace-nowrap">
                    {awayTeam.name}
                  </p>
                </div>
              </div>
            </div>

            <div className="matchTable" class="matches-table mt-12 flex flex-col">
              <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}>
              </div>
            </div>

            <section>
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
      </section>
    </article>
  );
};


export default MatchPage;