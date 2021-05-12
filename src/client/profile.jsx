import React from "react";
import { useLoading } from "./useLoading";
import { fetchJson } from "./http";
import { ErrorView } from "./errorView";
import { LoadingView } from "./loadingView";

export function Profile() {
  const { loading, error, data } = useLoading(() => fetchJson("api/profile"));

  if (error) {
    return <ErrorView error={error} />;
  }
  if (loading || !data) {
    return <LoadingView />;
  }

  const { username } = data;

  return (
    <div>
      <h1>Profile Page for {username}</h1>
      <div>
        Current certificates:
        <ul>
          <li>- Report</li>
          <li>- lamp</li>
        </ul>
        <div>Progress bar 60%</div>
      </div>
    </div>
  );
}
