import TableListItem from "./TableListItem";

const TableList = (props) => {
  const { teams } = props;
  const teamList = teams.map((team, index) => {
    let bg = index + 1;

    return (
      <TableListItem
        key={team.id}
        rank={index + 1}
        {...team}
        points={team.wins * 3 + team.draws * 1}
        goal_difference={team.goals_for - team.goals_against}
      />
    );
  });

  return (
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
  );
};

export default TableList;
