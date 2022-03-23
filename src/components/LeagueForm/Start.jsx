import { Fragment } from 'react';

const Start = (props) => {
  const { setLeagueName, onClick, value } = props;
  return (
    <Fragment>
      <input
        value={value}
        type="text"
        name="name"
        placeholder="Enter League Name"
        onChange={(event) => setLeagueName(event.target.value)}
      />
      <button onClick={() => onClick('SPORT')}>Submit</button>
    </Fragment>
  );
};

export default Start;
