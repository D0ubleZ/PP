import { Link, useLocation } from "react-router-dom";
import "./style.css"

const NavBar = () => {
  const location = useLocation();
    return (
        <nav className="navbar">
          <div className="nav-wrapper">
            <div className="logo">
              <Link to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/logo.jpeg`}
                  alt="brand"
                />
              </Link>
            </div>
            <div className="list-wrapper">
              <ul>
              <li>
              <Link
                to="/"
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{ color: location.pathname === "/about" && "#4071f4" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                style={{ color: location.pathname === "/skills" && "#4071f4" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                style={{ color: location.pathname === "/works" && "#4071f4" }}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
              >
                Contact
              </Link>
            </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    };

export default NavBar
