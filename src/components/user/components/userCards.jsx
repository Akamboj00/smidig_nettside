import React, {useState} from "react";
import {useHistory} from "react-router";
import {useSubmit} from "../../../client/lib/useSubmit";
import {postUser} from "../../lib/fb";
import {LoadingView} from "../../loadingView";
import Alert from "react-bootstrap/Alert";
import {UserCard} from "./userCard";
import {UserCardEdit} from "./userCardEdit";
import {forEach} from "react-bootstrap/ElementChildren";

export function UserCards({users, authKey, edit, onDelete}) {
    if (users === null) return LoadingView();

    const [state, setState] = useState(true);
    const [selected, setSelected] = useState(() => {
        return sessionStorage.getItem("user");
    });

    if(selected !== sessionStorage.getItem("user")) setSelected(sessionStorage.getItem("user"));

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [language, setLanguage] = useState("");

    const {handleSubmit: handleLogin, submitting, error,} = useSubmit(async () => {
            if (firstName && lastName && language !== "")
            {
                await postUser(firstName, lastName, language);
            }
        },
        () => {
            setState(true);
            setFirstName("");
            setLastName("");
            setLanguage("");
        }
    );

    const openCreateUser = () => {
        setState(false);
    }

    const createUser = ((!edit) ? (
            <>
                <div id={"create_new_user"} className={(state) ? ("create_new_user_initial") : ("create_new_user_toggle")} onClick={() => {
                    openCreateUser();
                }}>
                    {(state) ? (
                        <>
                            <h4 className={"center user_card_create_new_description"}>Create new user</h4>
                        </>
                    ) : (
                        <>
                            <div className={"loading_fix_login"}>
                                {submitting && <div className={"center sinnerFix"}><LoadingView/></div>}
                                {error &&
                                <>
                                    <Alert className="error" variant="danger">
                                        {error.toString()}
                                    </Alert>
                                </>
                                }
                                {!error && !submitting &&
                                <h5 className={"center"}>Login to continue</h5>
                                }
                            </div>
                            <form onSubmit={handleLogin}>
                                <label className={"user_input_label"}>
                                    <h5 className={"user_input_description"}>First name</h5>
                                    <input className={"user_input"}
                                           type={"text"}
                                           placeholder={"Bob"}
                                           value={(state) ? ("") : (firstName)}
                                           onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </label>
                                <label className={"user_input_label"}>
                                    <h5 className={"user_input_description"}>Last name</h5>
                                    <input className={"user_input"}
                                           type={"text"}
                                           placeholder={"Gunnar"}
                                           value={(state) ? ("") : (lastName)}
                                           onChange={(e) => setLastName(e.target.value)}
                                    />
                                </label>
                                <label className={"user_input_label"}>
                                    <h5 className={"user_input_description"}>Last name</h5>
                                    <input className={"user_input"}
                                           type={"text"}
                                           placeholder={"Gunnar"}
                                           value={(state) ? ("") : (language)}
                                           onChange={(e) => setLanguage(e.target.value)}
                                    />
                                </label>
                                <button disabled={submitting}>
                                    <h5>Create user</h5>
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </>) : (<></>)
    );

    if (users === "new") return createUser;
    if (users === null) return LoadingView();
    const userCards = (
        <>
            {Object.keys(users).map((index, key) => ((edit)
                    ?
                    (<UserCardEdit
                        user={users[index]}
                        onDelete={onDelete}
                    />)
                    :
                    (<UserCard
                        user={users[index]}
                        selected={selected}
                        onSelected={(selected) => setSelected(selected)}
                    />)
                )
            )}
        </>
    );

    const list = (
        <>
            {createUser}
            {userCards}
        </>);
    if (authKey !== undefined) return (state) ? (list) : (createUser);

}