import React from "react"

export function Learn(){

    return(
        <>
        <div className="learn_container">
            <div className="learn_heading">
                <h1 className="learn_text">Learn</h1>
                <img className="learn_icon" src={require("url:../img/test.png")}></img>
                <span className="line"></span>
            </div>
            <div className="learn_card_container">
                <div className="learn_card">
                    <img className="learn_card_icon" src={require("url:../img/sunbelle.png")}></img>
                    <div class="learn_card_text">Learn Sunbell</div>
                </div>
                <div className="learn_card">
                    <img className="learn_card_icon" src={require("url:../img/sunbelle.png")}></img>
                    <div class="learn_card_text">Learn Sunbell</div>
                </div>
                <div className="learn_card">
                    <img className="learn_card_icon" src={require("url:../img/sunbelle.png")}></img>
                    <div class="learn_card_text">Learn Sunbell</div>
                </div>
            </div>
        </div>
        </>
    )
}