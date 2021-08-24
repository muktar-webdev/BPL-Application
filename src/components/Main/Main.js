import React from "react";
import "./Main.css";
import scoreBoard from "..//../images/scoreboard_img.svg";

const Main = () => {
  return (
    <div className="main-container">
      <div className="half-width">
        <h1>THE BEST CRICKET FESTIVAL</h1>
        <h4>Cheers Your Favourite Cricket Team thorough this Platform</h4>
        <p style={{textAlignLast:"justify"}}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam,
          ducimus reiciendis. Voluptate odit magni error est aut consectetur
          adipisci culpa.
        </p>
        <button className="main-btn">About Us</button>
      </div>
      <div className="half-width">
        <img src={scoreBoard} alt="" />
      </div>
    </div>
  );
};

export default Main;
