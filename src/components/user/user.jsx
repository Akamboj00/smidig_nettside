import React, {useState} from "react";
import fire from "../../server/firebase";
import "./user.css";
import {useHistory} from "react-router";
import {LoadingView} from "../loadingView";
import {ArrowIcon} from "../svg/svg"

// TODO -> MOVE LATER!!!!!!
require("url:../img/blur.jpg");

export function UserCards(users, authKey) {
    const [state, setState] = useState("list");

    const [check, setCheck] = useState(false);

    if (users === null)
    {
        return LoadingView();
    }

    const openCreateUser = () => {
        setState("create");
    }

    const createUser = (
        <>
            <div id={"create_new_user"} className={"create_new_user_initial"} onClick={() => {
                openCreateUser();
            }}>
                <h4 className={"center user_card_create_new_description"}>Create new user</h4>
            </div>
        </>
    );
    setCreateUser();

    function setCreateUser() {
        const createUser = document.getElementById("create_new_user");
        if (state === "create" && !createUser.classList.contains("create_new_user_toggle"))
        {

            createUser.classList.toggle("create_new_user_initial");
            createUser.classList.toggle("create_new_user_toggle");
            createUser.firstChild.remove();
        }
    }


    const userCards = (
        <>
            {users.map(
                ({firstName, id, language, lastName, userId}) => (
                    <div key={userId} className={"user_card"}>
                        <div className={"user_card_image_container"}>
                            <div className={"center user_card_image"}/>
                        </div>
                        <div className={"user_card_info_container"}>
                            <div className={"center user_card_info"}>
                                <div className={"user_card_name_container"}>
                                    <h6>NAME:</h6>
                                    <h5 className={"user_card_name"}>{firstName} {lastName}</h5>
                                </div>
                                <div className={"user_card_language_container"}>
                                    <h6>LANGUAGE:</h6>
                                    <h5 className={"user_card_language"}>{language}</h5>
                                </div>
                            </div>
                        </div>
                        <div className={"user_card_right_top_container"}>
                            <p className={"center"}>USER ID: {userId}</p>
                        </div>
                        <div className={"user_card_right_bottom_container"}>
                            <p className={"user_card_admin_id_text"}>ADMIN ID: {id}</p>
                        </div>
                    </div>
                ))}
        </>
    );

    const list = (
        <>
            {createUser}
            {userCards}
        </>
    )

    if (authKey !== undefined)
    {
        if (state === "list")
        {
            return list;
        }
        else if (state === "create")
        {
            return createUser;
        }
    }
}

export function UserHeader(authKey) {
    const [state, setState] = useState(false);
    const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));
    const closed = (
        <>
            <div className={"user_header_content_container"} style={{height: "0px"}}>
                <div className={"user_arrow_btn"}>
                    <div className={"user_header_arrow_container"}>
                        <ArrowIcon
                            className={"user_header_arrow center"}
                        />
                    </div>
                </div>
            </div>
        </>
    );

    const open = (
        <>
            <div className={"user_header_content_container"} style={{height: "150px"}}>
                <div className={"admin_info_container"}>
                    <div className={"center admin-info-inner"}>
                        <h4 className={"admin_email_user"}>Email: {authUser.email}</h4>
                        <h4 className={"admin_id_user"}>Admin ID: {authUser.uid}</h4>
                    </div>
                </div>

                <div className={"user_arrow_btn"} onClick={() => {
                    if (state)
                    {
                        setState(false);
                    }
                }}>
                    <div className={"user_header_arrow_container"} style={{transform: "rotate(0deg)"}}>
                        <ArrowIcon
                            className={"user_header_arrow center"}
                        />
                    </div>
                </div>
            </div>
        </>
    );

    let content;

    if (state === false)
    {
        content = closed;
    }
    else
    {
        content = open;
    }

    if (authKey !== undefined)
    {
        return (
            <>
                <div className={"wrap_container wrap_user_header"} onClick={() => {
                    if (!state)
                    {
                        setState(true);
                    }
                }}
                     style={
                         (!state) ? ({backgroundImage: `linear-gradient(rgba(195, 220, 147, 1),rgba(195, 220, 147, 1)),url(${require("url:../img/blur.jpg")})`})
                             : ({
                                 backgroundImage: `linear-gradient(rgba(195, 220, 147, 1),rgba(195, 220, 147, 0.6)),url(${require("url:../img/blur.jpg")})`,
                                 animationName: "brightU"
                             })}>
                    <div className={"container_inner"}>
                        <div className={"user_header_container"}>
                            {content}
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return LoadingView();
    }
}

export function User() {
    const history = useHistory();
    const [users, setUsers] = useState(null);
    const [authKey, setAuthKey] = useState(() => {
        let key = Object.keys(window.sessionStorage)
            .filter(item => item.startsWith('firebase:authUser'))[0];
        if (key === undefined) return history.push("/login");
        return key;
    });

    if (authKey)
    {
        const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));
        const dbReference = fire.database().ref();

        dbReference.child('users').child(authUser.uid).once('value').then((snapshot) => {
            if (snapshot.val() != null)
            {
                setUsers(snapshot.val());
            }
        });
    }


    //dbReference.child('reports').child(authUser.uid).on('value', snap => console.log(snap.val()));
    //const users = dbReference.child('users').child(authUser.uid);

    // TODO -> Lage component av "user-card".

    return (
        <div id={"container_main"}>
            {UserHeader(authKey)}
            <div className={"wrap_container wrap_user_list"}>
                <div className={"container_inner"}>
                    <div className={"users_card_container"}>
                        <div className={"users_grid"}>
                            {UserCards(users, authKey)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
