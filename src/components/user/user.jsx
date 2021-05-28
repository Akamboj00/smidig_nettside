import React, {useState} from "react";
import fire from "../../server/firebase";
import "./user.css";
import {useHistory} from "react-router";
import {UserCards} from "./components/userCards";
import {UserHeader} from "./components/userHeader";

export function User() {
    const history = useHistory();
    const [users, setUsers] = useState(null);
    const [authKey, setAuthKey] = useState(() => {
        let key = Object.keys(window.sessionStorage).filter(item => item.startsWith('firebase:authUser'))[0];
        if (key === undefined) return history.push("/login");
        return key;
    });
    const [edit, setEdit] = useState(false);

    const switchEdit = () => {
        setEdit(!edit);
        console.log(edit);
    }

    if (authKey)
    {
        const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));
        const dbReference = fire.database().ref();

        dbReference.child('users').child(authUser.uid).once('value').then(async (snapshot) => {
            if (snapshot.exists() && users !== "new" && snapshot.val() !== undefined && snapshot.val() !== null)
            {
                if(users === null){
                    setUsers(snapshot.val());
                }
                let dbUsers = snapshot.val();
                if(users !== dbUsers)
                {
                    setUsers(dbUsers);
                }
            }
            else if (sessionStorage.getItem("user") !== undefined && users === "new" && snapshot.val() != null)
            {
                setUsers(null);
            }
            else if (users !== "new")
            {
                setUsers("new");
            }
        });
    }

    return (
        <div id={"container_main"}>
            {UserHeader(authKey, switchEdit)}
            <div className={"wrap_container wrap_content"}>
                <div className={"container_inner"}>
                    <div className={"users_card_container"}>
                        <div className={(!edit) ? ("users_grid") : ("users_grid_edit")}>
                            <UserCards
                                users={users}
                                authKey={authKey}
                                edit={edit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
