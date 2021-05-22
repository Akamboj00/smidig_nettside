import {Header} from "../components/header/header";
import {Redirect, Route, Switch} from "react-router";
import {MainMenu} from "./mainMenu/mainMenu";
import {Learn} from "../components/learn/Learn";
import {Users} from "./users";
import {Login} from "../sessions/login";
import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {Product} from "../components/product/product";
import {Report} from "./report";
// Main Stylesheet -> Shared values between all pages
import "../components/style/index.css"

export function Application() {

    return (
        <>
            <BrowserRouter>
                <Header/>
                    <Switch>
                        <Route path={"/learn"}>
                            <Learn/>
                        </Route>
                        <Route path={"/users"}>
                            <Users/>
                        </Route>
                        <Route path={"/report"}>
                            <Report/>
                        </Route>
                        <Route path={"/MainMenu"}>
                            <Header/>
                            <MainMenu/>
                        </Route>
                        <Route exact path={"/"}>
                            <Redirect to={"/login"}/>
                        </Route>
                        <Route path={"/login"}>
                            <Login/>
                        </Route>
                        <Route path={"/product"}>
                            <Product/>
                        </Route>
                        <Route>page not found</Route>
                    </Switch>
            </BrowserRouter>
        </>
    );
}
