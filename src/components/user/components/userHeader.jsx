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
                    <div className={"center admin-info-inner"}>
                        <h5 className={"admin_email_user"}>Email: {authUser.email}</h5>
                        <h5 className={"admin_id_user"}>Admin ID: {authUser.uid}</h5>
                        <button onClick={() => logout()} style={{
                            marginTop: "-50px", position: "absolute"
                        }}>Logout
                        </button>
                        <button onClick={() => switchEdit()} style={{marginTop: "-100px", position: "absolute"}}>Edit
                            users
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