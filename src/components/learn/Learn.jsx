import React, { useState } from "react"
import "./learn.css";
import { ProgressBar } from 'react-bootstrap';
import { BrowserRouter, Link, } from "react-router-dom";
import { Product } from '../product/product'
import { Route, Switch } from "react-router";
export const Learn = () =>{

    const [clicked, setclicked ] = useState()
    console.log(clicked)

    //bytter dette med request til firebase / eller backend
    const testdata = [
        {
            product_id: 0,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(8/14 * 100)
        },
        {
            product_id: 1,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(6/9 * 100)
        },
        {
            product_id: 2,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(10/19 * 100)
        },
        {
            product_id: 3,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(2/20 * 100)
        },
        {
            product_id: 4,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(8/11 * 100)
        },
        {
            product_id: 5,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(10/14 * 100)
        },
        {
            product_id: 6,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(8/10 * 100)
        },
        {
            product_id: 7,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(5/6 * 100)
        },
        {
            product_id: 8,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(10/19 * 100)
        },
        {
            product_id: 9,
            product_name: "sunbelle",
            product_img: "url:../img/test.png",
            product_progress: Math.floor(2/6 * 100)
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
                <Link to={{ pathname: '/product', state: clicked }} onClick={() => setclicked(testdata[product_id])}>
                    <div key={product_id} className="learn_card">
                        <img className="learn_card_icon" src={require(product_img)}></img>
                        <h2 className="learn_card_text">{product_name}</h2>
                        <ProgressBar variant="success" animated now={product_progress} label={`${product_progress}%`} />
                    </div>
                </Link>
            ))}
            </div>
        </>
    )
}