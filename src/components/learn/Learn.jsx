import React from "react"
import "./learn.css";
import { ProgressBar } from 'react-bootstrap';

export const Learn = () =>{

    //bytter dette med request til firebase / eller backend
    const testdata = [
        {
            product_id: 0,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 26
        },
        {
            product_id: 1,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 39
        },
        {
            product_id: 2,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 67
        },
        {
            product_id: 3,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 87
        },
        {
            product_id: 4,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 13
        },
        {
            product_id: 5,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 65
        },
        {
            product_id: 6,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 71
        },
        {
            product_id: 7,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 54
        },
        {
            product_id: 8,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 6
        },
        {
            product_id: 9,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: 61
        }

    ]

    return(
        <>
        <div className="learn_heading_container">
                <h1 className="learn_text">Learn</h1>
                <img className="learn_icon" src={require("url:../img/test.png")}></img>
            </div>
            <div className="learn_card_container">
            {testdata.map(({product_id, product_name, product_img, product_progress}) => (
                <div key={product_id} className="learn_card">
                <img className="learn_card_icon" src={require(product_img)}></img>
                <h2 className="learn_card_text">{product_name}</h2>
                <ProgressBar variant="success" animated now={product_progress} label={`${product_progress}%`} />
            </div>
            ))}
            </div>
        </>
    )
}