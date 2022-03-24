import { BsPlayBtnFill, BsStopCircle } from "react-icons/bs";

const Timer = (props) => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center ">
      <section className="border-8 border-gray-500 rounded shadow-2xl text-6xl text-white font-mono grid grid-cols-2 gap-x-px">
        <h1 className="bg-black p-2">
          {("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}
        </h1>
        <h1 className="bg-black p-2">
          {("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}
        </h1>
      </section>
      <section className="mt-4 text-4xl flex flex-row">
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  ">
            <BsPlayBtnFill
              onClick={props.onStart}
              className="hover:fill-gray-400"
            />
          </button>
          <label>First-half</label>
        </section>
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  ">
            <BsPlayBtnFill
              onClick={props.onStart}
              className="hover:fill-gray-400"
            />
          </button>
          <label>Second-half</label>
        </section>
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  justify-center items-center ">
            <BsStopCircle
              onClick={props.onStop}
              className="hover:fill-gray-400"
            />
          </button>
        </section>
      </section>
    </section>
  );
};

export default Timer;
