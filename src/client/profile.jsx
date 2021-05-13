import React from "react";
import { useLoading } from "./lib/useLoading";
import { fetchJson } from "./lib/http";
import { ErrorView } from "../components/errorView";
import { LoadingView } from "../components/loadingView";

export function Profile() {
  const { loading, error, data } = useLoading(() => fetchJson("api/profile"));

  if (error) {
    return <ErrorView error={error} />;
  }
  if (loading || !data) {
    return <LoadingView />;
  }

  const { email } = data;

  return (
    <div>
      <h1>Profile Page for {email}</h1>
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
