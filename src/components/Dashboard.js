import { useParams } from "react-router-dom";
import AddTeams from "./AdminDashboard/AddTeams";
import AdminTeamList from "./AdminDashboard/AdminTeamList";
import AdminSchedule from "./AdminDashboard/AdminSchedule";

const DashBoard = (props) => {

  const id = parseInt(useParams().id, 10);

  const { teams, fixtures, leagues } = props;

  const thisLeague = leagues.find(league => league.id === id);

  return (
    <div className="container mx-auto px-4 py-6 w-3/4">

      <h1 className="text-xl">Welcome to the Admin Dashboard for your league: <strong>{thisLeague.name}</strong></h1>

      <p>Here are some options to get you started.</p>

      <p className="text-center">---</p>

      <div className="add-teams container px-4 py-3">
        <AddTeams
          id={id}
          teams={teams}
        />
      </div>

      <p className="text-center">---</p>

      <div className="see-teams container px-4 py-3">
        <AdminTeamList id={id} teams={teams} />
      </div>

      <p className="text-center">---</p>

      <div className="league-schedule container px-4 py-3">
        <AdminSchedule id={id} teams={teams} fixtures={fixtures} />
      </div>
    </div>
  );
};

export default DashBoard;