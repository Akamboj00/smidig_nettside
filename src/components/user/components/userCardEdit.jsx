import React, {useEffect, useState} from "react";
import {deleteUser, editUser, postUser} from "../../lib/fb";
import {useHistory} from "react-router";
import {useSubmit} from "../../../client/lib/useSubmit";
import {LoadingView} from "../../loadingView";
import {LanguageCodes} from './languagecodes'

export function UserCardEdit({user, onDelete, _key}) {
    const [_firstName, setFirstName] = useState(user.firstName);
    const [_lastName, setLastName] = useState(user.lastName);
    const [_language, setLanguage] = useState(user.language);
    const [_image, setImage] = useState(user.image);

    const history = useHistory();

    const _deleteUser = async () => {
        if (confirm(`Confirm deleting user: ${user.firstName}`))
        {
            await deleteUser(user.userId).then(() => {
                if (user.userId === sessionStorage.getItem("user"))
                {
                    sessionStorage.removeItem("user");
                }
                onDelete();
            });
        }
    }

    const {handleSubmit: handleEditUser, submitting, error,} = useSubmit(async () => {
            if (_firstName && _lastName && _language && _image !== "")
            {
                await editUser(_firstName, _lastName, _language, _image, user.userId, user.progress);
                onDelete();
            }
            else
            {
                alert("Please fill out the form");
            }
        },
        () => {
            console.log("successful edit");
        }
    );

    return (

        <div
            key={_key}
            className={"user_card user_card_edit"}
        >
            <div className={"container_card_parent"}>
                <form onSubmit={handleEditUser} className={"form_edit_user"}>
                    <div className={"user_card_inner_container"}>

                        <div className={"user_active_indicator"}/>
                        <div className={"user_card_image_container"}>
                            <div className={"center user_card_image"} style={(_image === user.image) ? ({backgroundImage: `url(${user.image})`}) : ({backgroundImage: `url(${_image})`})}/>
                            <select className={"user_input_edit_img"}
                                    type={"text"}
                                    value={_image}
                                    onChange={(e) => setImage(e.target.value)}
                            >
                                <option value={"https://raw.githubusercontent.com/Akamboj00/smidig_nettside/main/src/components/img/userimg/user_images-01.png?token=ANMGHR55KID2FE3TKYMSWQTAYCPNM"}>Blue</option>
                                <option value={"https://raw.githubusercontent.com/Akamboj00/smidig_nettside/main/src/components/img/userimg/user_images-02.png?token=ANMGHRZL4LOSVASQKXQTZFTAYCPRI"}>Purple</option>
                                <option value={"https://raw.githubusercontent.com/Akamboj00/smidig_nettside/main/src/components/img/userimg/user_images-03.png?token=ANMGHR2GWJKWXWAOOSJZREDAYCPUU"}>Pink</option>
                                <option value={"https://raw.githubusercontent.com/Akamboj00/smidig_nettside/main/src/components/img/userimg/user_images-04.png?token=ANMGHR6RIESKXBVJP2DF3Z3AYCPVO"}>Green</option>
                                <option value={"https://raw.githubusercontent.com/Akamboj00/smidig_nettside/main/src/components/img/userimg/user_images-05.png?token=ANMGHR6KKZ4ABOFHT5EBTSDAYCPXA"}>Yellow</option>
                                <option value={"https://raw.githubusercontent.com/Akamboj00/smidig_nettside/main/src/components/img/userimg/user_images-06.png?token=ANMGHR2OL5QTMAHXYODYPJTAYCPYM"}>Orange</option>
                            </select>
                        </div>
                        <div className={"user_card_info_container"}>
                            <div className={"center user_card_info"}>
                                <div className={"user_card_name_container"}>
                                    <div className={"user_card_container_edit_inner"}>

                                        <div className={"user_card_name_edit_container_firstName"}>
                                            <h6>FIRST NAME:</h6>
                                            <input
                                                className={"user_card_name_input"}
                                                placeholder={user.firstName}
                                                value={_firstName}
                                                onChange={(e) => {
                                                    setFirstName(e.target.value);
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
                                                    setLastName(e.target.value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={"user_card_language_container"}>
                                <h6>LANGUAGE:</h6>
                                <select
                                    className={"user_card_language_input"}
                                    type={"text"}
                                    placeholder={user.language}
                                    value={_language}
                                    onChange={(e) => {
                                        setLanguage(e.target.value);
                                    }}
                                >
                                    {LanguageCodes.map(({index, English, alpha2}) => (
                                                <option key={index} className="notranslate" value={alpha2}>{English}</option>
                                            ))}
                                </select>
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
                        <button className={"user_card_extra_info user_card_extra_button"} disabled={submitting}>
                            <h6 className={"center"}>CONFIRM CHANGES</h6>
                        </button>
                        <div className={"user_card_select_user delete_user_hmm"} onClick={_deleteUser}>
                            <h6 className={"center"}>DELETE USER</h6>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}