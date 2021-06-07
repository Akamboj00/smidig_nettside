import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fire from "../../server/firebase";
import { LoadingView } from "../loadingView";

export function Parts() {
  const [imageLoaded, setImageLoaded] = useState(false)
    const [products, setProducts] = useState(null);
    const [params1, setParams1] = useState(null)
    let location = useLocation();

    async function getDatabaseSingleProgress() {
        const dbReference = fire.database().ref();
      
          dbReference.child("progress").child(sessionStorage.getItem("current_report_product_id")).once('value').then((snapshot) => {
              setProducts(snapshot.val());
          });
      }
      if(products){
          console.log(products)
      }
      if(location._product_id != undefined){
      sessionStorage.setItem("current_report_product_id", location._product_id)
      sessionStorage.setItem("current_report_product_name", location._product_name)
      }
      console.log(sessionStorage.getItem("current_report_product_id"))

      function ifImageIsLoaded(){
        setImageLoaded(true)
      }

      useEffect(() => {
        getDatabaseSingleProgress()
        setParams1(sessionStorage.getItem("current_report_product_name").toLowerCase())
      }, []);

      if(products === null){
        return(
          <div id={"container_main"}>
            <div className="learn_card_container">
              <LoadingView></LoadingView>
            </div>
          </div>
        )
    }else{
    return(
        <>
            <div id={"container_main"}>
              <div className="top_container">
                <h1 >Parts</h1>
                <h3>Choose a part</h3>
              </div>
              <div className={"wrap_container wrap_content"}>
                <div className={"container_inner"}>
                    <div className="parts_card_container">
                        {products.map(({part_id, part_image, part_name}) => (
                                <Link
                                style={{textDecoration: "none"}}
                                key={part_id}
                                className="parts_report_card"
                                to={{ pathname: `/report/${params1}/${part_id}`, part: part_id, _part_name: part_name}}
                                >
                                <div className="parts_image_container">
                                    <img className="parts_image center" onLoad={()=> ifImageIsLoaded()} src={part_image} />
                                    {!imageLoaded && <div className="center"><LoadingView></LoadingView></div>}
                                </div>
                                <div className="parts_card_info center">
                                    <div className="tooltip_learn">
                                      <span className="tooltiptext"><p className={"center"}>{part_name}</p></span>
                                    </div>
                                    <h5 className="parts_card_text">{part_name}</h5>
                                </div>
                                </Link>
                        ))}
                    </div>
                </div>
              </div>
            </div>
        </>
    )
    }
}