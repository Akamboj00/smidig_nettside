import React, {useState, useEffect} from "react";
import Modal from 'react-bootstrap/Modal'
import  {Button} from'react-bootstrap'

export function UserDocumentationModal(props){

    function googleTranslateElementInit() {
        new google.translate.TranslateElement({
            pageLanguage: 'en',
        })
    }

    useEffect(() => {
        setTimeout(function(){ googleTranslateElementInit() }, 2000);
        }, []);

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
            User component documentation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>User</h4>
          <p>
            User functionality bla bla bla
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}