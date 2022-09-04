import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="/">Home</Link>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>

      <li className="with-megamenu">
        <Link to="/services">Services</Link>
      </li>

      <li className="has-droupdown">
        <Link to="/blogs">Blog</Link>
      </li>

      <li className="has-droupdown">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
};
export default Nav;
