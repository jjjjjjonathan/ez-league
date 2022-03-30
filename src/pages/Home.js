import HomeButton from "../components/HomeButton";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  //
  return (
    <section className="container mt-20 mx-auto flex flex-col scale-125 sm:flex-row justify-center cursor-pointer">
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
  );
};

export default Home;
