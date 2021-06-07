import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import  {Button} from'react-bootstrap'

export function LearnDocumentationModal(props){

    console.log(props)
    return(
        <>
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Learn component documentation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Learn</h4>
          <p>
            Learn functionality bla bla bla
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}