import React, {useState} from "react";
import fire from "../../server/firebase";
import "./user.css";
import {useLoading} from "../../client/lib/useLoading";
import {ErrorView} from "../errorView";
import {LoadingView} from "../loadingView";
import {Link} from "react-router-dom";
import {ProgressBar} from "react-bootstrap";

export function User() {
    const [users, setUsers] = useState([]);

    const authKey = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
    const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));
    const dbReference = fire.database().ref();


    dbReference.child('users').child(authUser.uid).once('value').then((snapshot) => {
        if (snapshot.val() != null)
        {
            setUsers(snapshot.val());
        }
    });

    //dbReference.child('reports').child(authUser.uid).on('value', snap => console.log(snap.val()));
    //const users = dbReference.child('users').child(authUser.uid);

    return (
        <div id={"container_main"}>
            <div className={"container_inner"}>
                <div className={"users_card_container"}>
                    <div className={"users_grid"}>
                        <div className={"user_card_create_new"}>
                            <h4 className={"center user_card_create_new_description"}>Create new user</h4>
                        </div>
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
                    </div>
                </div>
            </div>
        </div>
    );
}
