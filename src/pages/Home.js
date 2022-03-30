import HomeButton from "../components/HomeButton";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <header className="container sm:mt-40 mx-auto flex flex-col m-0 scale-125 scale-125 justify-center m-10  cursor-pointer items-center">

        <h1 className="text-3xl pb-10 my-5">Welcome to ez-league</h1>
        <h3>The app to give your league the pro-sports feel</h3>

      </header>
      <section className="container mt-20 sm:mt-40 mx-auto flex flex-col m-0 scale-125 sm:flex-row scale-125 justify-center m-20  cursor-pointer">

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
