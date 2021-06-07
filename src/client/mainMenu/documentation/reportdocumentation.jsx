import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import  {Button} from'react-bootstrap'
import "./doucmentations.css";
require("url:../documentationImg/reportDoc1.png")
require("url:../documentationImg/reportDoc2.png")
require("url:../documentationImg/reportDoc3.png")
require("url:../documentationImg/reportDoc4.png")

export function ReportDocumentationModal(props){

    console.log(props)
     return(
        <>
    <div id={"container_main"}>
      <div className="top_container">
        <h1 >Report component documentation</h1>
        <h4>This documentation will cover usage of the report-component fuctionality.</h4>
      </div>
        <div className={"wrap_container wrap_content"}>
            <div className={"container_inner"}>
                <div className="report_doc_container">
                    <br/>
                    <h5 className="font-weight-bold"> 1. Start by selecting the part which you are going to file a report on. In this case, we will select Sunbell</h5>
                    <img className="img" src={require("url:../documentationImg/reportDoc1.png")}></img>
                    <h5 className="font-weight-bold"> 2. With Sunbell selected as product, we now need to select a part. In this case, we will select Sunbell 2.0 solar panel complete 4m cable</h5>
                    <img className="img"src={require("url:../documentationImg/reportDoc2.png")}></img>
                    <br/>
                    <h5 className="font-weight-bold"> 3. Finally, we need to fill in the report form. You are required to fill inn part number, the comment is optional.
                        When the report is ready, click "submit report".
                    </h5>
                    <img className="img" src={require("url:../documentationImg/reportDoc4.png")}></img>
                </div>
            </div>
        </div>
    </div>
      </>
     )
}