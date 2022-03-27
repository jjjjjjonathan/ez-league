import { Fragment } from "react";
import useDashboardMode from "../hooks/useDashboardMode";
import Start from "./AdminDashboard/Start"
import { useParams } from "react-router-dom";
import TeamForm from "./TeamForm";
import TableList from "./TableList";

const DashBoard = (props) => {
  let { id } = useParams()
  const START = "START";
  const ADDTEAMS = "ADDTEAMS";
  const SEETEAMS = "SEETEAMS";
  const { teams } = props;
  const { mode, transition, back, reset } = useDashboardMode(START);



  return (
    <Fragment>
      {

        mode === START && <Start onClick={transition} />

      }
      {
        mode === ADDTEAMS && <TeamForm id={parseInt(id)} />
      }
      {
        mode === SEETEAMS && <TableList id={parseInt(id)} teams={teams} />
      }
    </Fragment>
  )
}

export default DashBoard;