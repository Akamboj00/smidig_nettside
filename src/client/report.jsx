import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export function Report() {
  return (
    <div id={"container_main"}>
      <div className={"container_inner"}>
        <div>
          <h1>This is the report page</h1>
          <Link to="../img/test.png" target="_blank" download>
            <Button>Download</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
