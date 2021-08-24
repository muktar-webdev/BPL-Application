import React from "react";
import "./Header.css";
import bpl from "../../images/bpl_logo.jpg";

const Header = () => {
  return (
    <div className="topbar">
      <a href="./home">
        <img src={bpl} alt="" />
      </a>
      <a href="./team">Team</a>
      <a href="./team">Player</a>
      <a href="./team">About</a>
      <a href="./team">Contact</a>
      <a href="./team">Sign In</a>
    </div>
  );
};

export default Header;
