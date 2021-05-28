import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import fire from "../../server/firebase";
import { LoadingView } from "../loadingView";
import {Form, Button} from 'react-bootstrap'

export function FileReport() {
    return(
        <>
            <div>
            <div id={"container_main"}>
              <div className="top_container">
                <h1 >Finalize report</h1>
                <h3>Please fill in below</h3>
              </div>
              <div className={"wrap_container wrap_content"}>
                        <div className={"container_inner"}>
                        <Form.Group className="file_report_form">
                            <h3>Part number</h3>
                            <Form.Control className="file_report_input" size="lg" type="text" placeholder="part number*" />
                            <br />
                            <h3>Comment (optional)</h3>
                            <Form.Control className="file_report_input" size="lg" type="text" placeholder="optional comment" />
                            <br/>
                            <Button>Submit report</Button>
                        </Form.Group>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}