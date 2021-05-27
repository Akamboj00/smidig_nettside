import React, { useState, useEffect } from "react";
import "./product.css";
import { Link } from "react-router-dom";

require("url:../img/battery.png");
require("url:../img/lampshade.png");
require("url:../img/solarpanel.png");
require("url:../img/turtlelamp.png");

export const Product = (props) => {
  const testData = [
    {
      part_id: 0,
      part_name: "Part 1",
      part_img: "url:../img/battery.png",
    },
    {
      part_id: 1,
      part_name: "Part 2",
      part_img: "url:../img/lampshade.png",
    },
    {
      part_id: 2,
      part_name: "Part 3",
      part_img: "url:../img/solarpanel.png",
    },
    {
      part_id: 3,
      part_name: "Part 4",
      part_img: "url:../img/turtlelamp.png",
    },
  ];

  return (
    <>
      <div id={"container_main"}>
        <div className="learn_card_container">
          {testData.map(({ part_id, part_name, part_img }) => (
            <Link
              style={{ textDecoration: "none" }}
              key={part_id}
              className="learn_card"
              to={{ pathname: "/video" }}
            >
              <img className="learn_card_icon" src={require(part_img)} />
              <div className="card_info">
                <h4 className="learn_card_text">{part_name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
