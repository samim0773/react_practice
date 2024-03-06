import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "../../assets/Humburger";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <NavLink to="/">
              <img src="../../../public/logo1.png" alt="logo" />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/about">
                  About Me
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/what-i-do">
                  What i do
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/project">
                  Project
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
