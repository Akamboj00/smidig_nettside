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
 /*
    const authKey = Object.keys(window.sessionStorage)
        .filter(item => item.startsWith('firebase:authUser'))[0];
    const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));
    const dbReference = fire.database().ref();



    dbReference.child('users').child(authUser.uid).once('value').then((snapshot) => {
        setUsers(snapshot.val());
    })*/

    //dbReference.child('reports').child(authUser.uid).on('value', snap => console.log(snap.val()));
    //const users = dbReference.child('users').child(authUser.uid);

    return (
        <div id={"container_main"}>
            <div className={"container_inner"}>
                <h3>Users:</h3>
                {users.map(
                    ({firstName, id, language, lastName, userId}) => (
                        <div key={userId}>
                            <ol>
                                <li>userId: {userId}</li>
                                <li>adminId: {id}</li>
                                <li>First name: {firstName}</li>
                                <li>Last name: {lastName}</li>
                                <li>Languange: {language}</li>
                            </ol>
                        </div>
                    ))}
            </div>
        </div>
    );
}
