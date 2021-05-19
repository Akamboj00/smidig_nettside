import { Header } from "../components/header/header";
import { Redirect, Route, Router, Switch } from "react-router";
import { Learn } from "./Learn";
import { Profile } from "./profile";
import { Login } from "../sessions/login";
import React from "react";
import { BrowserRouter } from "react-router-dom";

export function Application() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/learn"}>
          <Learn />
        </Route>
        <Route path={"/profile"}>
          <Profile />
        </Route>
        <Route path={"/report"}>
          <h1>This is the report page</h1>
        </Route>
        <Route path={"/home"}>
          <Header />
          <h1>This is the home page</h1>
        </Route>
        <Route exact path={"/"}>
          <Redirect to={"/login"} />
        </Route>
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route>page not found</Route>
      </Switch>
    </BrowserRouter>
  );
}
