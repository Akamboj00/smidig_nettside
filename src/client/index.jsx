import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import {Learn} from './Learn'
import {Header} from '../components/header/header'
import {Profile} from "./profile";

function Application() {
    return <BrowserRouter>
    <header>
        <Header />
    </header>
        <Switch>
            <Route path={"/learn"}>
            <Learn/>
            </Route>
              <Route path={"/profile"}>
                <Profile/>
            </Route>
              <Route path={"/report"}>
                <h1>This is the report page</h1>
            </Route>
            <Route path={"/login"}>
                <h1>This is the login page</h1>
            </Route>
            <Route exact path={"/"}>
            </Route>
            <Route>
                page not found
            </Route>
        </Switch>
    </BrowserRouter>;
}

ReactDOM.render(Application(), document.getElementById("app"));
