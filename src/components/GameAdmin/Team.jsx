const Team = (props) => {
  console.log("this is props from team", props);
  return (
    <section className="py-3 px-2 flex flex-row ">
      <img
        src={props.teams.thumbnail_logo}
        alt="team-logo"
        className="object-contain "
      />
      <p className="sm:w-2/3 lg:w-3/4 p-4 whitespace-nowrap">
        {props.teams.name}
      </p>
    </section>
  );
};

export default Team;
