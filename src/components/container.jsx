import React from "react";
import {useLocation} from "react-router";

export function Container() {
    const location = useLocation();
    const loginPage = (location.pathname.startsWith("/login"));

    return (
            <div id={"container_main_please"}>

            </div>
    );
}
