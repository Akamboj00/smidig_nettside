import React from "react";
import Spinner from 'react-bootstrap/Spinner'

export function LoadingView() {
  return <Spinner animation="border" style={{position: "relative", margin: "0", padding:"0", marginLeft: "auto", marginRight:"auto", color: "#174A5B"}}/>;
}
