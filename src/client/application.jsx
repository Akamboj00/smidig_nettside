import React from "react";
import { Header } from "../components/header/header";
import { Redirect, Route, Switch } from "react-router";
import { MainMenu } from "./mainMenu/mainMenu";
import { Learn } from "../components/learn/Learn";
import { User } from "../components/user/user";
import { Login } from "../sessions/login";
import { BrowserRouter } from "react-router-dom";
import { Product } from "../components/product/product";
import { Report } from "../components/report/report";
import { Video } from "../components/video/video";
// Main Stylesheet -> Shared values between all pages
import "../components/style/index.css";

export function Application() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={"/learn"}>
            <Learn />
          </Route>
          <Route path={"/users"}>
            <User />
          </Route>
          <Route path={"/report"}>
            <Report />
          </Route>
          <Route path={"/MainMenu"}>
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
          <Route path={"/video"}>
            <Video />
          </Route>
          <Route>page not found</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

/*
return (
    <>
        <BrowserRouter>
            <Header/>
            <Switch>
                {() => {
                    if (checkSession())
                    {
                        return (
                            <>
                                <Route path={"/learn"}>
                                    <Learn/>
                                </Route>
                                <Route path={"/users"}>
                                    <Users
                                        firebase={fire}
                                    />
                                </Route>
                                <Route path={"/report"}>
                                    <Report/>
                                </Route>
                                <Route path={"/MainMenu"}>
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
                            </>
                        )
                    } else {
                        return (
                            <Route>
                                <Login/>
                            </Route>
                        )
                    }
                }}

            </Switch>
        </BrowserRouter>
    </>
);
 */
