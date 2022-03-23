import { BsPlayBtnFill, BsStopCircle } from "react-icons/bs";

const Timer = (props) => {
  console.log("this is props from timer", props);
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from indigo-500 to indigo-800">
      <section className="border-8 border-gray-500 rounded shadow-2xl text-8xl text-white font-mono grid grid-cols-2 gap-x-px">
        <h1 className="bg-black p-2">
          {("0" + Math.floor((props.timer / 60000) % 60)).slice(-2)}
        </h1>
        <h1 className="bg-black p-2">
          {("0" + Math.floor((props.timer / 1000) % 60)).slice(-2)}
        </h1>
      </section>
      <section className="mt-4 text-4xl">
        <button className="m-2">
          <BsPlayBtnFill onClick={props.onStart} />
        </button>
        <button className="m-2">
          <BsStopCircle onClick={props.onStop} />
        </button>
      </section>
    </section>
  );
};

export default Timer;
