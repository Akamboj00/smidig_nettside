import {useHistory} from "react-router";
import React, {useState} from "react";
import {ArrowIcon} from "../../svg/svg";
import fire from "../../../server/firebase";
import {LoadingView} from "../../loadingView";

export function UserHeader(authKey, switchEdit) {
    if(authKey === undefined) return LoadingView();
    const history = useHistory();
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

    const logout = () => {
        fire.auth().signOut().then(() => {
            sessionStorage.removeItem("user");
            history.push("/login");
        }).catch((error) => {
            alert("An error occurred on logout");
        });
    }


    const open = (
        <>
            <div className={"user_header_content_container"} style={{height: "150px"}}>
                <div className={"admin_info_container"}>
                    <h5 className={"admin_email_user"}>Admin: {authUser.email}</h5>
                    <div className={"center admin-info-inner"}>
                        <button className={"edit_button"} onClick={() => switchEdit()}>Edit
                            users
                        </button>
                        <button className={"logout_button"} onClick={(e) => {
                            e.preventDefault();
                            if(confirm(`Confirm logout: ${authUser.email}`))
                            {
                                fire.auth().signOut().then(() => {
                                    sessionStorage.removeItem("user");
                                    history.push("/login");
                                }).catch((error) => {
                                    alert("An error occurred on logout");
                                });
                            }
                        }}>Logout
                        </button>
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

    return (
        <>
            <div className={"wrap_container wrap_user_header"} onClick={() => {
                if (!state)
                {
                    setState(true);
                }
            }}>
                <div className={"container_inner"}>
                    <div className={"user_header_container"}>
                        {content}
                    </div>
                </div>
            </div>
        </>
    )
}