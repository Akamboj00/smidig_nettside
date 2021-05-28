import React, {useState} from "react";
import {LoadingView} from "../../loadingView";

export function UserCardRR(user) {
    if(user === null) return LoadingView();
    const {firstName, id, language, lastName, userId} = user;
    return (
        <>
            <div key={userId} className={"user_card"}
                 onClick={() => sessionStorage.setItem("user", userId)}
                 style={{background: userId === sessionStorage.getItem("user") && "pink"}}>
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
        </>
    )
}

export function UserCardsR(users, authKey) {
    const [state, setState] = useState("list");
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
            {users.map(({firstName, id, language, lastName, userId}) => (
                    <UserCardRR
                        user={{firstName, id, language, lastName, userId}}
                    />
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