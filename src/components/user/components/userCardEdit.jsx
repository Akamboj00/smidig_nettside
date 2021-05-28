import React, {useEffect, useState} from "react";
import {deleteUser} from "../../lib/fb";

export function UserCardEdit({user}) {
    const [_firstName, setFirstName] = useState();
    const [_lastName, setLastName] = useState();
    const [_language, setLanguage] = useState();

    useEffect(() => {
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setLanguage(user.language);
    }, []);

    return (
        <div
            key={user.userId}
            className={"user_card user_card_edit"}
        >
            <div className={"user_card_inner_container"}>
                <div className={"user_active_indicator"}/>
                <div className={"user_card_image_container"}>
                    <div className={"center user_card_image"}/>
                </div>
                <div className={"user_card_info_container"}>
                    <div className={"center user_card_info"}>
                        <div className={"user_card_name_container"}>
                            <div className={"user_card_container_edit_inner"}>
                                <form>
                                <div className={"user_card_name_edit_container_firstName"}>
                                    <h6>FIRST NAME:</h6>
                                    <input
                                        className={"user_card_name_input"}
                                        placeholder={user.firstName}
                                        value={_firstName}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setFirstName(e.target.value)
                                        }}
                                    />
                                </div>
                                <div className={"user_card_name_edit_container_lastName"}>
                                    <h6>LAST NAME:</h6>
                                    <input
                                        className={"user_card_name_input"}
                                        placeholder={user.lastName}
                                        value={_lastName}
                                        onChange={(e) => {
                                            e.preventDefault();
                                            setLastName(e.target.value)
                                        }}
                                    />
                                </div>
                                </form>
                            </div>
                        </div>
                        <div className={"user_card_language_container"}>
                            <h6>LANGUAGE:</h6>
                            <input
                                className={"user_card_language_input"}
                                placeholder={user.language}
                                value={_language}
                                onChange={(e) => {
                                    e.preventDefault();
                                    setLanguage(e.target.value)
                                }}
                            />
                        </div>
                    </div>
                </div>
                {/*
                <div className={"user_card_right_top_container"}>
                    <p className={"center"}>USER ID: {user.userId}</p>
                </div>
                <div className={"user_card_right_bottom_container"}>
                    <p className={"user_card_admin_id_text"}>ADMIN ID: {user.id}</p>
                </div>
                */}
            </div>
            <div className={"user_card_function_bar"}>
                <div className={"user_card_extra_info"}>
                    <h6 className={"center"}>CONFIRM CHANGES</h6>
                </div>
                <div className={"user_card_select_user"} onClick={
                    async () => {
                        if(confirm(`Confirm deleting user: ${user.firstName}`)){
                            await deleteUser(user.userId)
                            console.log(user.userId);
                            console.log(sessionStorage.getItem("user"));
                            if (user.userId === sessionStorage.getItem("user"))
                            {
                                sessionStorage.removeItem("user");
                            }
                        }
                }}>
                    <h6 className={"center"}>DELETE USER</h6>
                </div>
            </div>
        </div>
    )
}