import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Learn } from "../components/learn/learn";
import { Header } from "../components/header/header";
import { MainMenu } from "../client/mainMenu/mainMenu";
import { Product } from "../components/product/product"

function Application() {
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
          <h1>This is the profile page</h1>
        </Route>
        <Route path={"/report"}>
          <h1>This is the report page</h1>
        </Route>
        <Route path={"/login"}>
          <h1>This is the login page</h1>
        </Route>
        <Route exact path={"/"}>
          <MainMenu />
        </Route>
        <Route path={"/product"} component={Product}>
         <Product/>
        </Route>
        <Route>page not found</Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(Application(), document.getElementById("app"));
