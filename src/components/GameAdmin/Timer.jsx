import { BsPlayBtnFill, BsStopCircle } from 'react-icons/bs';

const Timer = (props) => {
  const { time, startHalf1, fixtureId, startHalf2 } = props;
  return (
    <section className="min-h-screen flex flex-col justify-center items-center ">
      <section className="border-8 border-gray-500 rounded shadow-2xl text-6xl text-white font-mono grid grid-cols-2 gap-x-px">
        <h1 className="bg-black p-2">
          {time.minutes.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
        <h1 className="bg-black p-2">
          {time.seconds.toLocaleString('en-US', {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
        </h1>
      </section>
      <section className="mt-4 text-4xl flex flex-row">
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  ">
            <BsPlayBtnFill
              onClick={() => startHalf1(fixtureId, 'First Half')}
              className="hover:fill-gray-400"
            />
          </button>
          <label>First-half</label>
        </section>
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  ">
            <BsPlayBtnFill
              onClick={() => startHalf2(fixtureId, 'Second Half')}
              className="hover:fill-gray-400"
            />
          </button>
          <label>Second-half</label>
        </section>
        <section className="flex flex-row justify-center items-center">
          <button className="m-2  justify-center items-center ">
            <BsStopCircle className="hover:fill-gray-400" />
          </button>
        </section>
      </section>
    </section>
  );
};

export default Timer;

// const timer2 = setInterval(() => {
//   let minutes = 0;
//   let seconds = Math.floor((Date.now() - dateBefore) / 1000);
//   if (seconds >= 60) {
//     minutes = Math.floor(seconds / 60);
//     seconds -= 60 * minutes;
//   }
//   console.log(`${minutes.toLocaleString('en-US', {
//     minimumIntegerDigits: 2,
//     useGrouping: false
//   })}:${seconds.toLocaleString('en-US', {
//     minimumIntegerDigits: 2,
//     useGrouping: false
//   })}`);

//   if (minutes === 8) {
//     clearInterval(timer2);
//   }
// }, 1000);

// console.log(`${minutes.toLocaleString('en-US', {
//   minimumIntegerDigits: 2,
//   useGrouping: false
// })}:${seconds.toLocaleString('en-US', {
//   minimumIntegerDigits: 2,
//   useGrouping: false
// })}`);
