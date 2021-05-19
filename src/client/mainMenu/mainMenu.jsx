import React from "react";
import "./mainMenu.css";
import Link from "react-router-dom";

export const MainMenu = () => {
  return (
    <div className="main_container">
      <div className="box" id="box1">
        <h1>Learn</h1>
      </div>

      <div className="box" id="box2">
        <h1>Report</h1>
      </div>

      <div className="box" id="box3">
        <h1>Profile</h1>
      </div>
    </div>
  );
};
