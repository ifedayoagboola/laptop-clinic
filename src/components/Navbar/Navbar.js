import React from "react";
import "./Navbar.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav>
        <div className="nav-items">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/new">New</Link>
            </li>
            <li>
              <Link to="/recent">Recent</Link>
            </li>
          </ul>
          <div className="icons">
            <span>
              <i class="fas fa-search"></i>
            </span>
            <span>
              <Link to="/login">
                <i class="fas fa-user"></i>
              </Link>
            </span>

            <span>
              <i class="fas fa-shopping-basket"></i>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
