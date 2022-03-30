import { Fragment } from "react";


const Start = (props) => {
  const { onClick } = props;

  return (

    <Fragment>
      <button onClick={() => onClick("ADDPLAYERS")}>Add Players</button>
      <button onClick={() => onClick("SEEPLAYERS")}>See Players</button>

    </Fragment>
  )


}

export default Start;