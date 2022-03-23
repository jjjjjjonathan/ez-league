import Team from "./Team";

const ScoreBoard = (props) => {
  return (
    <article className="flex flex-row">
      <section className="flex flex-row">
        <Team teams={props.home} />
        <h1 className="mt-10">{props.home.score}</h1>
      </section>
      <h1 className="mt-10">VS</h1>
      <section className="flex flex-row">
        <Team teams={props.away} />
        <h1 className="mt-10">{props.home.score}</h1>
      </section>
    </article>
  );
};

export default ScoreBoard;
