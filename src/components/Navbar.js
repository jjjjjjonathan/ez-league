import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home&nbsp;&nbsp;</Link>

        <Link to="/standing">League Table</Link>
      </div>
    </nav>
  );
};

export default Navbar;
