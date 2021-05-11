import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";

function Application() {
    return <BrowserRouter>
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
}

ReactDOM.render(<div>Hello world</div>, document.getElementById("app"));