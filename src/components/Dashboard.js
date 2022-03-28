import { Fragment } from "react";
import useDashboardMode from "../hooks/useDashboardMode";
import Start from "./AdminDashboard/Start";
import { useParams } from "react-router-dom";
import TeamForm from "./TeamForm";
import TableList from "./TableList";
import Schedule from "./Schedule";

const DashBoard = (props) => {
  let { id } = useParams();
  const START = "START";
  const ADDTEAMS = "ADDTEAMS";
  const SEETEAMS = "SEETEAMS";
  const SCHEDULE = "SCHEDULE";
  const { teams, fixtures, setMultipleTeams, addNewFixtures } = props;
  const { mode, transition, back, reset } = useDashboardMode(START);



  return (
    <Fragment>
      {mode === START && <Start onClick={transition} />}
      {mode === ADDTEAMS && <TeamForm id={parseInt(id)} setMultipleTeams={setMultipleTeams} teams={teams} />}
      {mode === SEETEAMS && <TableList id={parseInt(id)} teams={teams} />}
      {mode === SCHEDULE && <Schedule id={parseInt(id, 10)} fixtures={fixtures} teams={teams} addNewFixtures={addNewFixtures} />}
    </Fragment>
  );
};

export default DashBoard;