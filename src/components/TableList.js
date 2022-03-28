import TableListItem from "./TableListItem";

const TableList = (props) => {
  const { teams, id, onClickBack } = props;
  const filteredTeams = teams.filter(team => team.league_id === id);
  const teamList = filteredTeams.map((team, index) => {

    return (
      <TableListItem
        key={team.id}
        rank={index + 1}
        {...team}
      />
    );
  });

  return (
    <div>
      <table className="shadow-2x1 font-[Poppins] border-1 border-gray-200 w-6/12 overflow-hidden content-center mx-auto ">
        <thead className="bg-gray-200  border-gray-200 gap-4">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Rank
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              Club
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              MP
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              W
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              D
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              L
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              GF
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              GA
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              GD
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-center">
              pts
            </th>
          </tr>
        </thead>
        <tbody className="text-center">{teamList}</tbody>
      </table>
      <button onClick={() => onClickBack()}>Go Back</button>
    </div>
  );
};

export default TableList;
