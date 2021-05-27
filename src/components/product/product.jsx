import React, { useState, useEffect } from "react";
import "./product.css";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import fire from "../../server/firebase";
import { getDatabaseSingleProgress } from '../../components/lib/fb'
import { LoadingView } from "../loadingView";

require("url:../img/battery.png");
require("url:../img/lampshade.png");
require("url:../img/solarpanel.png");
require("url:../img/turtlelamp.png");

export const Product = (props) => {
  const [products, setProducts] = useState(null);
  const [authKey, setAuthKey] = useState(() => {
    let key = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
    if (key === undefined) return history.push("/login");
    return key;
});
  const { id } = useParams();

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

async function getDatabaseSingleProgress() {
  const dbReference = fire.database().ref();

    dbReference.child("progress").child(id).once('value').then((snapshot) => {
        setProducts(snapshot.val());
    });
}

useEffect(() => {
  getDatabaseSingleProgress()
}, []);
if(authKey === null){
  history.push("/users")
}
if(products === null){
    return(
      <div id={"container_main"}>
        <div className="learn_card_container">
          <LoadingView></LoadingView>
        </div>
      </div>
    )
}else{
  return (
    <>
      <div id={"container_main"}>
        <div className="learn_card_container">
          {products.map(({part_id,part_image, part_name, part_video}) => (
            <Link
              style={{ textDecoration: "none" }}
              key={part_id}
              className="learn_card"
              to={{ pathname: "/video", video: part_video, product: id, part: part_id}}
            >
              <img className="learn_card_icon" src={part_image} />
              <div className="card_info">
                <h4 className="learn_card_text">{part_name}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
}
