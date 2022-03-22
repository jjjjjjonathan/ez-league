import { Fragment } from "react";
import TableListItem from "./TableListItem";

const TableList = (props) => {
  const { teams } = props;
  const teamList = teams.map((team, index) => (
    <TableListItem key={team.id} rank={index + 1} {...team} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Rank</th>
          <th scope="col">Club</th>
          <th scope="col">MP</th>
          <th scope="col">W</th>
          <th scope="col">D</th>
          <th scope="col">L</th>
          <th scope="col">GF</th>
          <th scope="col">GA</th>
          <th scope="col">GD</th>
          <th scope="col">pts</th>
        </tr>
      </thead>
      {teamList}
    </table>
  );
};

export default TableList;
