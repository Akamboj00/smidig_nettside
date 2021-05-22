import React from "react";
import {useLoading} from "./lib/useLoading";
import {fetchJson} from "./lib/http";
import {ErrorView} from "../components/errorView";
import {LoadingView} from "../components/loadingView";
import fire from "../server/firebase";

export function Users() {
    /*
    const { loading, error, data } = useLoading(() => fetchJson("api/profile"));
    if (error) {
      return <ErrorView error={error} />;
    }
    if (loading || !data) {
      return <LoadingView />;
    }

    const { email } = data;
  */
    const {loading, error, data} = useLoading(async () => fire);
    if (error)
    {
        return <ErrorView error={error}/>;
    }
    if (loading || !data)
    {
        return <LoadingView/>;
    }
    const {firebase} = data;


    /*
    const dbReference = fire.database().ref();
    const uid = fire.auth().currentUser.uid;
    console.log(fire);
    dbReference.child('users').child(uid).on('value', snap => console.log(snap.val()));
    dbReference.child('reports').child(uid).on('value', snap => console.log(snap.val()));
    */
    return (
        <div id={"container_main_please"}>
            <div>
                <h1>Profile Page for </h1>
                <h6>UID: </h6>
                <div>
                    Current certificates:
                    <ul>
                        <li>- Report</li>
                        <li>- lamp</li>
                    </ul>
                    <div>Progress bar 60%</div>
                </div>
            </div>
        </div>
    );
}
