import React from "react";

export function ErrorView({ error }) {
  return <div>An error happened: {error.toString()}</div>;
}
