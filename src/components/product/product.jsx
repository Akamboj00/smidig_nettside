import React, { useState, useEffect } from "react";
import "./product.css";
import { Link, useLocation } from "react-router-dom";
import { useParams } from 'react-router-dom';
import fire from "../../server/firebase";
import { getDatabaseSingleProgress } from '../../components/lib/fb'
import { LoadingView } from "../loadingView";

require("url:../img/battery.png");
require("url:../img/lampshade.png");
require("url:../img/solarpanel.png");
require("url:../img/turtlelamp.png");

export const Product = () => {
  const [products, setProducts] = useState(null);
  const [productsOnUsers, setProductsOnUsers] = useState(null)
  const [authKey, setAuthKey] = useState(() => {
    let key = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
    if (key === undefined) return history.push("/login");
    return key;
});
  let location = useLocation();
  const { id } = useParams();

async function getDatabaseSingleProgress() {
  const dbReference = fire.database().ref();

    dbReference.child("progress").child(sessionStorage.getItem("current_product_id")).once('value').then((snapshot) => {
        setProducts(snapshot.val());
    });
    const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));

    dbReference.child('users').child(authUser.uid).once('value').then((snapshot) => {
      setProductsOnUsers(snapshot.val())
    })
}
useEffect(() => {
  getDatabaseSingleProgress()
}, []);

if(location._product_name && location._product_id){
  sessionStorage.setItem("current_product", location._product_name)
  sessionStorage.setItem("current_product_id", location._product_id)
  }
if(authKey === null){
  history.push("/users")
}
if(products === null || productsOnUsers === null){
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
        <h2 className="product_name">{sessionStorage.getItem("current_product")}</h2>
        <div className="learn_card_container">
          {products.map(({part_id, part_image, part_name, part_video}) => (
            <Link
              style={
                { textDecoration: "none",
                  backgroundColor: (productsOnUsers[JSON.parse(sessionStorage.getItem("user"))].progress[id][part_id]) ? "green" : "red"
              }
            }
              key={part_id}
              className="learn_card"
              to={{ pathname: "/video", video: part_video, product: id, part: part_id, _part_name: part_name}}
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
