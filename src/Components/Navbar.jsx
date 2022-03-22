import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <Link exact to="/" className="nav-link" style={{ color: "black" }}>
        Home
      </Link>
      <Link exact to="/People" className="nav-link" style={{ color: "black" }}>
        People
      </Link>
      <Link exact to="/Films" className="nav-link" style={{ color: "black" }}>
        Films
      </Link>
    </nav>
  );
};

export default Navbar;
