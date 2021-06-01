import React from "react";
import userCard from "./userCard.css"
import {CheckmarkEmptyIcon, CheckmarkIcon, StarIcon} from "../../svg/svg";
import {Link} from "react-router-dom";

export function UserCard({user, selected, onSelected, _key}) {
    return (
        <div
            key={_key}
            className={(user.userId === selected) ? ("user_card user_card_selected") : ("user_card")}
        >
            <div className={"container_card_parent"}>
                <div className={"user_card_inner_container"}>
                    <div className={"user_active_indicator"}/>
                    <div className={"user_card_image_container"}>
                        <div className={"center user_card_image"} style={(user.image != null) ? ({backgroundImage: `url(${user.image})`}) : ({})}/>
                    </div>
                    <div className={"user_card_info_container"}>
                        <div className={"center user_card_info"}>
                            <div className={"user_card_name_container"}>
                                <h6>NAME:</h6>
                                <h5 className={"user_card_name notranslate"}>{user.firstName} {user.lastName}</h5>
                            </div>
                            <div className={"user_card_language_container"}>
                                <h6>LANGUAGE:</h6>
                                <h5 className={"user_card_language notranslate"}>{user.language}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"user_card_function_bar"}>
                    <div className={"user_card_extra_info"}>
                        <h6 className={"center"}>CERTIFICATES</h6>
                    </div>
                    <div className={"user_card_select_user"}
                         onClick={() => {
                             onSelected(user.userId);
                             sessionStorage.setItem("user", user.userId);
                         }
                         }>
                        <h6 className={"center"}>SELECT USER</h6>
                    </div>
                </div>
                <div className={"learn_card_watched_container"}>
                    <div className={"learn_card_watched center"}>
                        {(user.userId === selected) ? (<StarIcon
                            className={"checkmark_icon_learn_product star_user center"}
                        />) : (<StarIcon
                            className={"checkmark_icon_learn_product_empty center"}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    )
}