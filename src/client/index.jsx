import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { Header } from "../components/header/header";

function Application() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/learn"}>
          <h1>This is the learn page</h1>
        </Route>
        <Route path={"/profile"}>
          <h1>This is the profile page</h1>
        </Route>
        <Route path={"/report"}>
          <h1>This is the report page</h1>
        </Route>
        <Route exact path={"/"}>
          <Header />
        </Route>
        <Route>page not found</Route>
      </Switch>
    </BrowserRouter>
  );
=======
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import { Learn } from '../components/learn/Learn'

function Application() {
    return <BrowserRouter>
        <Switch>
            <Route path={"/learn"}>
            <Learn/>
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
                <ul>
                    <li><Link to={"/learn"}>Link to Learn</Link></li>
                    <li><Link to={"/report"}>Link to report</Link></li>
                    <li><Link to={"/profile"}>Link to Profile</Link></li>
                </ul>
            </Route>
            <Route>
                page not found
            </Route>
        </Switch>
    </BrowserRouter>;
>>>>>>> cb17a77e937667f0383dfdf3c15d4a07e48a1043
}

ReactDOM.render(Application(), document.getElementById("app"));
