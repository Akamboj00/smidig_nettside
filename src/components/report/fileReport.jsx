import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fire from "../../server/firebase";
import { LoadingView } from "../loadingView";
import {Form, Button} from 'react-bootstrap';
import { errorView } from '../errorView';
import Alert from 'react-bootstrap/Alert';
import {useHistory} from "react-router";

export function FileReport() {
    const [error, setError] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const history = useHistory();
    let location = useLocation()
    if(!location.part && !location._part_name){
        history.push("/report")
    }
    const submitReport = () => {
        console.log(location.part)

        var part_number = document.getElementById("part_number").value
        var optional_comment = document.getElementById("optional_comment").value
        console.log(part_number)
        if(!part_number){
            setError("You need to fill in part number!")
        }else{
            setError(false)
            fire.database().ref('reports').push({
                    userId : sessionStorage.getItem('user'),
                    partNumber : part_number,
                    productId : location.part,
                    partName: location._part_name,
                    productName : sessionStorage.getItem("current_report_product_name"),
                    comment : optional_comment
            })
            setSubmitted(true)
        }
    }
    return(
        <>
            <div id={"container_main"}>
              <div className="top_container">
                <h1 >Finalize report</h1>
                <h3>Please fill in below</h3>
              </div>
              <div className={"wrap_container wrap_content"}>
                        <div className={"container_inner"}>
                        <Form.Group className="file_report_form">
                            <h3>Part number*</h3>
                            <Form.Control id="part_number" className="file_report_input" size="lg" type="text" placeholder="part number*" />
                            <br />
                            <h3>Comment (optional)</h3>
                            <Form.Control id="optional_comment" className="file_report_input_comment" size="lg" type="text" placeholder="optional comment" />
                            <br/>
                            <Button type="submit" onClick={() => submitReport()} >Submit report</Button>
                            {error && <Alert className="error" variant="danger">
                                <h5>{error}</h5>
                            </Alert>}
                            {submitted && <Alert className="error" variant="success">
                                <h5>Report submitted!</h5>
                            </Alert>}
                        </Form.Group>
                        </div>
                    </div>
                </div>
        </>
    )
}