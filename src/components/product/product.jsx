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
      product_id: 0,
      product_name: "Part 1",
      product_img: "url:../img/battery.png",
    },
    {
      product_id: 1,
      product_name: "Part 2",
      product_img: "url:../img/lampshade.png",
    },
    {
      product_id: 2,
      product_name: "Part 3",
      product_img: "url:../img/solarpanel.png",
    },
    {
      product_id: 3,
      product_name: "Part 4",
      product_img: "url:../img/turtlelamp.png",
    },
  ];

  return (
    <>
      <div id={"container_main"}>
        <div className="learn_card_container">
          {testData.map(
            ({ product_id, product_name, product_img, product_progress }) => (
              <Link
                style={{ textDecoration: "none" }}
                key={product_id}
                className="learn_card"
                to={{ pathname: "/video" }}
              >
                <img className="learn_card_icon" src={require(product_img)} />
                <div className="card_info">
                  <h4 className="learn_card_text">{product_name}</h4>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </>
  );
};
