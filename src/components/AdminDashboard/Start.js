import { Fragment } from "react";


const Start = (props) => {
  const { onClick } = props;

  return (

    <Fragment>
      <button onClick={() => onClick("ADDTEAMS")}>Add Teams</button>
      <button onClick={() => onClick("SEETEAMS")}>See Teams</button>

    </Fragment>
  )


}

export default Start;