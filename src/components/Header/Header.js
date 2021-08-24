import React from "react";
import "./Header.css";
import bpl from "../../images/bpl_logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faArrowCircleDown,
  faIdCardAlt,
  faSignInAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="topbar">
      <a className="home" href="./home">
        <h2>BPL</h2>
      </a>
      <a href="./login">
        <FontAwesomeIcon icon={faSignInAlt} /> Sign In
      </a>
      <a href="./contact">
        <FontAwesomeIcon icon={faIdCardAlt} /> Contact
      </a>
      <a href="./about">
        <FontAwesomeIcon icon={faAddressCard} /> About
      </a>
      <a href="./player">
        <FontAwesomeIcon icon={faArrowCircleDown} /> Player
      </a>
      <a href="./team">
        <FontAwesomeIcon icon={faUserFriends} /> Team
      </a>
    </div>
  );
};

export default Header;
