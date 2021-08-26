import React from "react";
import "./Players.css";

const Players = (props) => {
  const player = props.player;
  const { name, img, position, batting, bowling, salary } = player;
  return (
    <div className="players-container">
      <div className="player-container">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <p>{position}</p>
        <p>Batting Average: {batting}</p>
        <p>Bowling Average: {bowling}</p>
        <p>Salary : {salary}</p>
        <button className="player-btn">Add Player</button>
      </div>
    </div>
  );
};

export default Players;
