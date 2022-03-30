import { Fragment } from "react";


const Start = (props) => {
  const { onClick } = props;

  return (

    <Fragment>
      <button onClick={() => onClick("ADDPLAYERS")}>Add Players</button>
      <button onClick={() => onClick("SEEPLAYERS")}>See Players</button>
      <h1 className="text-xl">If you're seeing this, still need to finish styling which will be done in time for demo day. sorry ran into personal issues last night - jonathan</h1>
    </Fragment>
  );


};

export default Start;