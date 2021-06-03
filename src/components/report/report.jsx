import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { InputField } from "../inputField";
import {useHistory} from "react-router";
import fire from "../../server/firebase";
import { LoadingView } from "../loadingView";

require("url:../img/test.png");
require("url:../img/new/sunbell_image.png");
require("url:../img/new/movesmart_image.png");
require("url:../img/new/startpluss_image.png");
require("url:../img/new/sunturtle_image.png");
require("url:../img/new/home_image.png");
require("url:../img/home_image.png");
require("url:../img/reporticon.png");
require("url:../img/reportIconBlue.png")
import "./report.css";

export function Report() {
  const [clicked, setClicked] = useState();
  const [products, setProducts] = useState(null);
  const [params, setParams] = useState(null)
  const history = useHistory()
  const [authKey, setAuthKey] = useState(() => {
    let key = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
    if (key === undefined) return history.push("/login");
    return key;
});

  if(sessionStorage.getItem("user") === null){
    alert("Please select a user!")
    history.push("/users");
}

  
  const [data] = useState([
    {
        product_id: 0,
        product_name: "Sunbell",
        product_img: "url:../img/new/sunbell_image.png",
    },
    {
        product_id: 1,
        product_name: "MoveSmart",
        product_img: "url:../img/new/movesmart_image.png",
    },
    {
        product_id: 2,
        product_name: "Start+",
        product_img: "url:../img/new/startpluss_image.png",
    },
    {
        product_id: 3,
        product_name: "SunTurtle",
        product_img: "url:../img/new/sunturtle_image.png",
    },
    {
        product_id: 4,
        product_name: "Home",
        product_img: "url:../img/new/home_image.png",
    },
]);

async function getData() {
  const dbReference = fire.database().ref();

    dbReference.child("progress").child(clicked.product_id).once('value').then((snapshot) => {
        setProducts(snapshot.val());
    });
    const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));
}

if(data === null){
  return(
    <div id={"container_main"}>
      <div className="learn_card_container">
        <LoadingView></LoadingView>
      </div>
    </div>
  )
}

useEffect(() => {
}, []);
  return (
    <div id={"container_main"}>
      <div className="top_container">
        <h1 >Report</h1>
        <h3>Choose a product</h3>
      </div>
      <div className={"wrap_container wrap_content"}>
                    <div className={"container_inner"}>
                        <div className="report_card_container">
                            {data.map(
                                ({
                                     product_id,
                                     product_name,
                                     product_img,
                                 }) => (
                                  <Link
                                  style={{textDecoration: "none"}}
                                  key={product_id}
                                  className="report_card"
                                  to={{pathname: `/report/${product_name.toLowerCase()}`, _product_id : product_id, _product_name : product_name}}
                                  onClick={() => setClicked(data[product_id])}
                              >
                                  <div className="image_container">
                                          <img
                                              className="report_card_icon center"
                                              src={require(product_img)}
                                          />
                                  </div>
                                    <div className="report_card_info">
                                        <h4 className="report_card_text center notranslate"><span>{product_name}</span></h4>
                                    </div>
                                  </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
    </div>
  );
}
