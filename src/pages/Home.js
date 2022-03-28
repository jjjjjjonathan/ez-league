import HomeButton from "../components/HomeButton";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-row justify-center ">
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
