import React, {useState} from "react";
import "./user.css";
import "../main.css";
import {useHistory} from "react-router";
import {getDatabaseWithKey, getSessionStorage} from "../../lib/fb";
import {UserCardsR} from "./userCardRR";


export function UserR() {
    const history = useHistory();
    const [users, setUsers] = useState(null);
    const [authKey, setAuthKey] = useState(() => {
        // SESSION -> FB -> Get firebase auth session.
        const key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
        // Check if key is undefined -> Reroute user to login.
        if (key === undefined) return history.push("/login");
        // Return firebase.auth.uid as Key.
        return key;
    });

    // FB -> DB -> Fetch users table -> Set users useState to result.
    async function activateUsers(userAuth) {
        // Null check
        if (users === null)
        {
            //Call data with "Table name" and "User UID".
            setUsers(await getDatabaseWithKey("users", userAuth.uid));
        }
    }
    // FB -> Auth Session Data
    const userAuth = getSessionStorage(authKey);

    // DB -> DB -> Fetch users -> Set users -> Log users.
    activateUsers(userAuth).then((data) => {
        console.log("DB: Fetch -> %creference.users.uid", "color: yellow; font-style: italic; background-color: blue;padding: 2px");
        console.table(users);
    });

    return (
        <>
            <div className={"wrap_main"}>
                <div className={"wrap wrap_f2"}>
                    <div className={"wrap_width"}>
                        {/* TOP CONTENT */}
                        {/* CONTENT START */}

                        {/* CONTENT END */}
                    </div>
                </div>
                <div className={"wrap wrap_ff"}>
                    <div className={"wrap_width"}>
                        {/* MAIN CONTENT */}
                        {/* CONTENT START */}
                        <div className={"grid_user_card"}>
                            {UserCardsR(users, authKey)}
                        </div>
                        {/* CONTENT END */}
                    </div>
                </div>
                <div className={"wrap wrap_f2"}>
                    <div className={"wrap_width"}>
                        {/* BOTTOM SPACER */}
                    </div>
                </div>
            </div>
        </>
    );
}
