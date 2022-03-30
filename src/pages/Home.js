import HomeButton from "../components/HomeButton";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <header className="container sm:mt-40 mx-auto flex flex-col m-0  justify-center  cursor-pointer items-center">

        <h1 className="text-6xl pb-5">Welcome to ez-league</h1>
        <h3 className="text-2xl">The app to give your league the pro-sports feel</h3>

      </header>
      <section className="container mt-20 sm:mt-40 mx-auto flex flex-col m-0  sm:flex-row  justify-center cursor-pointer">

        <HomeButton
          text={"As a Manager"}
          url={"images/manager2.jpeg"}
          path={"/leagueform"}
        />
        <HomeButton
          text={"As a Supporter"}
          url={"images/fans.jpeg"}
          path={"/leagues"}
        />
      </section>
    </div>
  );
};

export default Home;
