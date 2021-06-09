import React, {useState} from "react";
import {useHistory} from "react-router";
import {useSubmit} from "../../../client/lib/useSubmit";
import {postUser} from "../../lib/fb";
import {LoadingView} from "../../loadingView";
import Alert from "react-bootstrap/Alert";
import {UserCard} from "./userCard";
import {UserCardEdit} from "./userCardEdit";
import {forEach} from "react-bootstrap/ElementChildren";
import * as url from "url";
import {LanguageCodes} from './languagecodes'

export function UserCards({users, authKey, edit, switchEdit, create, onCreate, onDelete}) {
    if (users === null) return LoadingView();

    const [selected, setSelected] = useState(() => {
        return sessionStorage.getItem("user");
    });

    if (selected !== sessionStorage.getItem("user")) 
    setSelected(sessionStorage.getItem("user"));

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [language, setLanguage] = useState("no");
    const [image, setImage] = useState(undefined);


    const {handleSubmit: handleCreateUser, submitting, error,} = useSubmit(async (e) => {
            if (firstName && lastName && language && image !== undefined)
            {
                await postUser(firstName, lastName, language, image);
                setFirstName("");
                setLastName("");
                setLanguage("no");
                setImage(undefined)
                onCreate(true);
            }
            else
            {
                alert("Please fill out the form");
            }
            e.preventDefault();
        },
        () => {
            onCreate(true);
            setFirstName("");
            setLastName("");
            setLanguage("");
        }
    );

    const openCreateUser = () => {
        if (create)
        {
            onCreate(false);
        }
    }

    const createUser = (
        <>

            <div id={"create_new_user"} className={(create) ? ("create_new_user_initial") : ("create_new_user_toggle")} onClick={() => {
                (!edit) ?
                    (openCreateUser())
                    :
                    (switchEdit());
            }}>
                {(create) ? (
                    <>
                        {(!edit) ?
                            (
                                <h4 className={"center user_card_create_new_description"}>Create new user</h4>
                            ) :
                            (
                                <h4 className={"center user_card_create_new_description"}>Close edit users</h4>
                            )
                        }
                    </>
                ) : (
                    <>
                        <div className={"create_user_container"}>
                            <div className={"user_create_img_container"}>
                                <div className={"user_create_img center"} style={(image !== undefined) ? ({backgroundImage: `url(${image})`}) : ({})}/>
                            </div>
                            <form onSubmit={handleCreateUser}>
                                <div className={"user_input_container"}>
                                    <label className={"user_input_label"}>
                                        <h5 className={"user_input_description"}>First name</h5>
                                        <input className={"user_input"}
                                               type={"text"}
                                               placeholder={""}
                                               value={(create) ? ("") : (firstName)}
                                               onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className={"user_input_container"}>
                                    <label className={"user_input_label"}>
                                        <h5 className={"user_input_description"}>Last name</h5>
                                        <input className={"user_input"}
                                               type={"text"}
                                               placeholder={""}
                                               value={(create) ? ("") : (lastName)}
                                               onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </label>
                                </div>
                                <div className={"user_input_container"}>
                                    <label className={"user_input_label"}>
                                        <h5 className={"user_input_description"}>Language</h5>
                                        <select className={"user_input"}
                                                type={"text"}
                                                value={(language !== "") ? (language) : ("EN")}
                                                onChange={(e) => setLanguage(e.target.value)}
                                        >
                                            <option value="" selected disabled hidden>Choose language</option>
                                            {LanguageCodes.map(({English, alpha2}) => (
                                                <option className="notranslate" value={alpha2}>{English}</option>
                                            ))}
                                        </select>
                                    </label>
                                </div>
                                <div className={"user_input_container"}>
                                    <label className={"user_input_label"}>
                                        <h5 className={"user_input_description"}>Image</h5>
                                        <select className={"user_input"}
                                                type={"text"}
                                                placeholder={"img"}
                                                value={(create) ? ("") : (image)}
                                                onChange={(e) => setImage(e.target.value)}
                                        >
                                            <option value="" selected disabled hidden>Choose image</option>
                                            <option value={"https://i.imgur.com/kFCFd94.png"}>Blue</option>
                                            <option value={"https://i.imgur.com/83ejAzc.png"}>Purple</option>
                                            <option value={"https://i.imgur.com/Sa2jYJD.png"}>Pink</option>
                                            <option value={"https://i.imgur.com/IiI4VS6.png"}>Green</option>
                                            <option value={"https://i.imgur.com/vK5OEH6.png"}>Yellow</option>
                                            <option value={"https://i.imgur.com/wnxrocF.png"}>Orange</option>
                                            </select>
                                    </label>
                                </div>
                                <div className={"user_input_container"}>
                                    <button disabled={submitting} className={"user_create_new_button center"}>
                                        <h5 className={"center"}>Create user</h5>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
            </div>
        </>);

    if (users === "new") return createUser;
    if (users === null) return LoadingView();
    const userCards = (
        <>
            {Object.keys(users).map((index, key) => ((edit)
                    ?
                    (<UserCardEdit
                        user={users[index]}
                        onDelete={onDelete}
                        key={key}
                    />)
                    :
                    (<UserCard
                        user={users[index]}
                        selected={selected}
                        onSelected={(selected) => setSelected(selected)}
                        key={key}
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
    if (authKey !== undefined) return (create) ? (list) : (
        <>
            <div className={"exit_create_new_user"} onClick={() => onCreate(true)}>
                <h4 className={"center user_card_create_new_description"}>Close create user</h4>
            </div>
            {createUser}
        </>);

}