import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <nav>
        <span>
          <h1> Harsh </h1>
        </span>
        <div>
          <ul className="item_menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Para">Para</Link>
            </li>
            {/* <li>Know More</li> */}
          </ul>
        </div>
      </nav>
    </>
  );
}
export default Header;
