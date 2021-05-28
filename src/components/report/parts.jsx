import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fire from "../../server/firebase";
import { LoadingView } from "../loadingView";

export function Parts() {
    const [products, setProducts] = useState(null);
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

      useEffect(() => {
        getDatabaseSingleProgress()
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
                                to={{ pathname: `/report/${sessionStorage.getItem("current_report_product_name").toLowerCase()}/${part_id}`, part: part_id, _part_name: part_name}}
                                >
                                <div className="parts_image_container">
                                    <img className="parts_image" src={part_image} />
                                </div>
                                <div className="parts_card_info">
                                    <h4 className="learn_card_text">{part_name}</h4>
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