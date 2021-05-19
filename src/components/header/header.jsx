import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

export const Header = () => {
  //if (window.location.pathname === ("/login" || "/")) {
  //return null;
  //}
  return (
    <div className="header_container">
      <h1 className="header_title">BR!GHT</h1>
      <ul className="header_urlContainer">
        <li className="header_links">
          <Link to={"/home"}>
            <h2 className="header_linkName">HOME</h2>
          </Link>
        </li>
        <li className="header_links">
          <Link to={"/learn"}>
            <h2 className="header_linkName">LEARN</h2>
          </Link>
        </li>
        <li className="header_links">
          <Link to={"/profile"}>
            <h2 className="header_linkName">PROFILE</h2>
          </Link>
        </li>
      </ul>
    </div>
  );
};
