import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import EventTable from "./GameAdmin/EventTable";

const MatchPage = (props) => {
  const { id } = useParams();
  const { fixtures, teams, players, state, fixtureEvents } = props;
  const [timer, setTimer] = useState(0);
  const [timerRef, setTimerRef] = useState();
  const startTimer = () => {
    const seconds = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
    setTimerRef(seconds);
  };

  const fixture = fixtures.find(fixture => fixture.id === parseInt(id));

  const homeTeam = teams.find(team => team.id === fixture.home_team_id);

  const awayTeam = teams.find(team => team.id === fixture.away_team_id);

  const thisFixtureEvents = fixtureEvents.filter(fixtureEvent => fixtureEvent.fixture_id === parseInt(id, 10));

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

    <div className="container mx-auto py-10">
      <div className="mx-auto my-2 max-w-md rounded overflow-hidden shadow-md text-xs">

        <div className="flex bg-gray-200 px-2 py-2">
          { }
          {(fixture.status === "First Half" || fixture.status === "Second Half") ? (
            <div className="w-5/12 text-gray-700 text-left text-red-700 ml-3">{time.minutes.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}:{time.seconds.toLocaleString('en-US', {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}</div>
          ) : (
            <div className="w-5/12 text-gray-700 text-left text-red-700 ml-3">{fixture.status}</div>
          )}
          <div className="w-5/12 flex justify-end items-center">
            <p className="w-8 px-2 text-center"></p>
            <p className="w-8 px-2 text-center"></p>
            <p className="w-8 px-2 text-center"></p>
            <p className="w-8 px-2 text-center"></p>
          </div>
          <div className="w-1/6 text-gray-700 text-right mr-3">Sportsnet</div>
        </div>

        <div className="flex px-2 py-2 items-center">
          <div className="w-5/12 flex">
            <img className="w-6 sm:w-10 mr-2 self-center" alt="away-logo" src={homeTeam.thumbnail_logo ? homeTeam.thumbnail_logo : "/images/ez-team.png"} />
            <div className="flex flex-col">
              <p className="text-sm font-bold">{homeTeam.name}</p>
              <p className="hidden sm:block text-gray-600">({homeTeam.wins}-{homeTeam.draws}-{homeTeam.losses})</p>
            </div>
          </div>
          <div className="w-5/12 flex justify-end items-center">
            <p className="w-8 px-1 text-center"></p>
            <p className="w-8 px-1 text-center"></p>
            <p className="w-8 px-1 text-center"></p>
            <p className="w-8 px-1 text-center"></p>
          </div>
          <p className="w-1/6 text-lg sm:text-xl font-bold text-right mr-5">{fixture.home_team_score}</p>
        </div>

        <div className="flex px-2 py-2 items-center">
          <div className="w-5/12 flex">
            <img className="w-6 sm:w-10 mr-2 self-center" alt="home-logo" src={awayTeam.thumbnail_logo ? awayTeam.thumbnail_logo : "/images/ez-team.png"} />
            <div className="flex flex-col">
              <p className="text-sm font-bold">{awayTeam.name}</p>
              <p className="hidden sm:block text-gray-600">({awayTeam.wins}-{awayTeam.draws}-{awayTeam.losses})</p>
            </div>
          </div>
          <div className="w-5/12 flex justify-end items-center">
            <p className="w-8 px-1 text-center"></p>
            <p className="w-8 px-1 text-center"></p>
            <p className="w-8 px-1 text-center"></p>
            <p className="w-8 px-1 text-center"></p>
          </div>
          <p className="w-1/6 text-lg sm:text-xl font-bold text-right mr-5">{fixture.away_team_score}</p>
        </div>

        {/* <div className="hidden sm:block border-t border-gray-300">
          <p className="text-center text-gray-500 m-1 uppercase">Match Events</p>
          <div className="flex">
            <div className="w-1/2 px-2 py-2">
              <div className="flex">
                <img className="w-10 mr-2 self-center" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/6450.png?w=90&h=60&scale=crop&transparent=true" />
                <div className="flex flex-col">
                  <p className="font-semibold">Kawhi Leonard</p>
                  <p className="text-gray-600">TOR - SF</p>
                  <p className="text-gray-600">30 PTS, 7 REB, 6 AST</p>
                </div>
              </div>
            </div>
            <div className="w-1/2 px-2 py-2">
              <div className="flex">
                <img className="w-10 mr-2 self-center" src="https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/3975.png?w=90&h=60&scale=crop&transparent=true" />
                <div className="flex flex-col">
                  <p className="font-semibold">Stephen Curry</p>
                  <p className="text-gray-600">GS - SG</p>
                  <p className="text-gray-600">47 PTS, 8 REB, 7 AST</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {thisFixtureEvents.length > 0 ? (
          <Fragment>
            <div className="border-t bg-gray-200 text-center px-1 py-1">
              <p className="text-gray-600">MATCH EVENTS</p>
            </div>

            <section className="flex border-t bg-gray-200 w-full">
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
          </Fragment>
        ) : (
          <Fragment>
            <div className="border-t bg-gray-200 text-center px-1 py-1">
              <p className="text-gray-600">Nothing has happened yet...</p>
            </div>
          </Fragment>
        )}



        {/* <div className="flex border-t bg-gray-200">
          <div className="w-1/2 px-2 py-2 text-center">
            <p className="font-semibold text-gray-700">ORACLE Arena</p>
            <p className="font-light text-gray-600">Oakland, CA</p>
          </div>
          <div className="w-1/2 px-2 py-2 text-center">
            <p className="text-gray-600"><span className="font-semibold">Line</span>: GS -4.5</p>
            <p className="text-gray-600"><span className="font-semibold">O/U</span>: 213.5</p>
          </div>
        </div> */}

      </div>


      {/* <p>---------------------</p> */}
      {/* <article className="flex flex-col justify-center items-center text-2xl font-mono border-2  border-gray-200 rounded py-10 bg-black text-white ">

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
                    src={homeTeam.thumbnail_logo ? homeTeam.thumbnail_logo : "/images/ez-team.png"}
                    alt="team-logo"
                    className="object-contain mr-2 w-10 h-10 justify-center items-center"
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
                      src={awayTeam.thumbnail_logo ? awayTeam.thumbnail_logo : "/images/ez-team.png"}
                      alt="team-logo"
                      className="object-contain mr-2 w-10 h-10 justify-center items-center"
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
      </article> */}
    </div>

  );
};


export default MatchPage;