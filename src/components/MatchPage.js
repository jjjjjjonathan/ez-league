import React from "react";

class MatchPage extends React.component {
  render() {
    return (
      <div className="container">
        <h1>ScoreBoard</h1>
        <div className="title-box">
          <p>Local Team</p>
          <p id="elapsed">45'</p>
          <p>Visitor Team</p>
        </div>
        <div className="title-box">
          <div class="team">
            {/* <img  id="homeLogo" > */}
            <p id="homeName">Team name</p>
          </div>
          <p id="goals">3  -  1</p>
          <div className="team">
            {/* <img id="awayLogo"> */}
            <p id="awayName">Team name</p>
          </div>
        </div>
        <div className="matchTable" class="matches-table">
          <div style={{ borderTop: "2px solid #fff ", marginLeft: 20, marginRight: 20 }}></div>
        </div>
      </div>
    );
  }
}

export default MatchPage