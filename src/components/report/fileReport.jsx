import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fire from "../../server/firebase";
import { LoadingView } from "../loadingView";
import {Form, Button} from 'react-bootstrap'
import { errorView } from '../errorView'
import Alert from 'react-bootstrap/Alert'

export function FileReport() {
    const [error, setError] = useState(false)
    const submitReport = () => {

        const part_number = document.getElementsByClassName("file_report_input").value
        if(!part_number){
            setError(true)
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
                            <Form.Control className="file_report_input" size="lg" type="text" placeholder="part number*" />
                            <br />
                            <h3>Comment (optional)</h3>
                            <Form.Control className="file_report_input" size="lg" type="text" placeholder="optional comment" />
                            <br/>
                            <Button type="submit" onClick={() => submitReport()} >Submit report</Button>
                            {error && <Alert className="error" variant="danger">
                                <h5>You need to fill in part number!</h5>
                            </Alert>}
                        </Form.Group>
                        </div>
                    </div>
                </div>
        </>
    )
}