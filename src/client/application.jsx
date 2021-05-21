import { Header } from "../components/header/header";
import { Redirect, Route, Switch } from "react-router";
import { MainMenu } from "./mainMenu/mainMenu";
import { Learn } from "../components/learn/Learn";
import { Profile } from "./profile";
import { Login } from "../sessions/login";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Product } from "../components/product/product";
import { Report } from "./report";

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
          <Report />
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
        <Route path={"/product"}>
          <Product />
        </Route>
        <Route>page not found</Route>
      </Switch>
    </BrowserRouter>
  );
}
