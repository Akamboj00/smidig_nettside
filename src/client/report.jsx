import React from "react";
import { Link } from "react-router-dom";

export function Report() {
  return (
    <div>
      <h1>This is the report page</h1>
      <Link to="../img/test.png" target="_blank" download>
        Download
      </Link>
    </div>
  );
}