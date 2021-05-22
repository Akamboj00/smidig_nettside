import React, {useState} from "react";
import "./learn.css";
import {ProgressBar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Header} from "../header/header";
import {Container} from "../container";

require("url:../img/test.png")
require("url:../img/sunbell_image.png")
require("url:../img/movesmart_image.png")
require("url:../img/startpluss_image.png")
require("url:../img/sunturtle_image.png")
require("url:../img/home_image.png")
require("url:../img/home_image.png")
require("url:../img/reporticon.png")
export const Learn = () => {
    const [clicked, setclicked] = useState();
    console.log(clicked);

    //bytter dette med request til firebase / eller backend
    const total_progress = Math.floor((44 / 87) * 100)
    const testdata = [
        {
            product_id: 0,
            product_name: "Learn Sunbell",
            product_img: "url:../img/sunbell_image.png",
            product_progress: Math.floor((8 / 14) * 100),
        },
        {
            product_id: 1,
            product_name: "Learn MoveSmart",
            product_img: "url:../img/movesmart_image.png",
            product_progress: Math.floor((6 / 9) * 100),
        },
        {
            product_id: 2,
            product_name: "Learn Start+",
            product_img: "url:../img/startpluss_image.png",
            product_progress: Math.floor((10 / 19) * 100),
        },
        {
            product_id: 3,
            product_name: "Learn SunTurtle",
            product_img: "url:../img/sunturtle_image.png",
            product_progress: Math.floor((2 / 20) * 100),
        },
        {
            product_id: 4,
            product_name: "Learn Home",
            product_img: "url:../img/home_image.png",
            product_progress: Math.floor((8 / 11) * 100),
        },
        {
            product_id: 5,
            product_name: "Learn Report",
            product_img: "url:../img/test.png",
            product_progress: Math.floor((10 / 14) * 100),
        },
    ];

    return (
        <>
            <div id={"container_main_please"}>
                <div className={"learn_container"}>
                    <div className="learn_heading_container">
                        <h3 className="learn_text">Total learning progress</h3>
                        <ProgressBar className="learn_total_progress">
                            <ProgressBar className="learn_progress_background"
                                         animated
                                         now={total_progress}
                            />
                            <h5 className="progress_total_text h5 center">{`${total_progress}%`}</h5>
                        </ProgressBar>
                    </div>
                    <div className={"learn_card_container_fix"}>
                        <div className="learn_card_container">
                            {testdata.map(
                                ({product_id, product_name, product_img, product_progress}) => (
                                    <Link
                                        style={{textDecoration: 'none'}}
                                        key={product_id} className="learn_card"
                                        to={{pathname: "/product", state: clicked}}
                                        onClick={() => setclicked(testdata[product_id])}
                                    >
                                        <img className="learn_card_icon" src={require(product_img)}/>
                                        <div className="card_info">
                                            <h4 className="learn_card_text">{product_name}</h4>
                                            <ProgressBar className={"learn_single_progress"}>
                                                <ProgressBar
                                                    className="progress_bar font-weight-bold"
                                                    animated
                                                    now={product_progress}
                                                />
                                                <h4 className="progress_on_card center h6 single_progress_text">{`${product_progress}%`}</h4>
                                            </ProgressBar>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
