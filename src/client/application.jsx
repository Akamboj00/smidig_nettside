import { BrowserRouter } from "react-router-dom";
import { Header } from "../components/header/header";
import { Route, Switch } from "react-router";
import { Learn } from "./Learn";
import { Profile } from "./profile";
import { Login } from "../sessions/login";
import React from "react";

export function Application() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
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
        <Route path={"/login"}>
          <Login />
        </Route>
        <Route exact path={"/"}>
          <h1>This is the home page</h1>
        </Route>
        <Route>page not found</Route>
      </Switch>
    </BrowserRouter>
  );
}
