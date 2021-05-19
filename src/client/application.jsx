import { Header } from "../components/header/header";
import { Redirect, Route, Switch } from "react-router";
import { MainMenu } from "./mainMenu/mainMenu";
import { Learn } from "../components/learn/Learn";
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
          <Header />
          <h1>This is the report page</h1>
        </Route>
        <Route path={"/MainMenu"}>
          <Header />
          <MainMenu />
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
