import React from "react";
import userCard from "./userCard.css";
import {deleteUser} from "../../lib/fb";
import {LoadingView} from "../../loadingView";

export function UserCardEdit({user, key}) {
    if (user.firstName === null) return LoadingView();
    return (
        <div
            key={key}
            className={"user_card"}
        >
            <div className={"user_card_inner_container"}>
                <div className={"user_active_indicator"}/>
                <div className={"user_card_image_container"}>
                    <div className={"center user_card_image"}/>
                </div>
                <div className={"user_card_info_container"}>
                    <div className={"center user_card_info"}>
                        <div className={"user_card_name_container"}>
                            <h6>NAME:</h6>
                            <h5 className={"user_card_name"}>{user.firstName} {user.lastName}</h5>
                        </div>
                        <div className={"user_card_language_container"}>
                            <h6>LANGUAGE:</h6>
                            <h5 className={"user_card_language"}>{user.language}</h5>
                        </div>
                    </div>
                </div>
                <div className={"user_card_right_top_container"}>
                    <p className={"center"}>USER ID: {user.userId}</p>
                </div>
                <div className={"user_card_right_bottom_container"}>
                    <p className={"user_card_admin_id_text"}>ADMIN ID: {user.id}</p>
                </div>
            </div>
            <div className={"user_card_function_bar"}>
                <div className={"user_card_extra_info"}>
                    <h6 className={"center"}>EDIT</h6>
                </div>
                <div className={"user_card_select_user"} onClick={async () => {
                    await deleteUser(user.userId)
                        console.log(user.userId);
                        console.log(sessionStorage.getItem("user"));
                    if (user.userId === sessionStorage.getItem("user"))
                    {
                        sessionStorage.removeItem("user");
                    }
                }}>
                    <h6 className={"center"}>DELETE USER</h6>
                </div>
            </div>
        </div>
    )
}