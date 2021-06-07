import React, {useState, useEffect} from "react";
import userCard from "./userCard.css"
import {CheckmarkEmptyIcon, CheckmarkIcon, StarIcon} from "../../svg/svg";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie'
import { LoadingView } from "../../loadingView";

export function UserCard({user, selected, onSelected, _key}) {
    const [imageLoaded, setImageLoaded] = useState(false)

    function ifImageIsLoaded(){
        setImageLoaded(true)
    }
   //language stuff

function setLanguage(){
Cookies.remove('googtrans',{path:'', domain: 'domainNameNoDot.com'});
Cookies.remove('googtrans',{path:'', domain: '.domainNamePrecedDot.com'});
Cookies.set('GoogleAccountsLocale_session', `${sessionStorage.getItem("user_language").toLowerCase()}`, { expires: 999});
Cookies.set('googtrans', `/en/${sessionStorage.getItem("user_language").toLowerCase()}`, { expires: 999});
location.reload()
}

    return (
        <div
            key={_key}
            className={(user.userId === selected) ? ("user_card user_card_selected") : ("user_card")}
        >
            <div className={"container_card_parent"}>
                <div className={"user_card_inner_container"}>
                    <div className={"user_active_indicator"}/>
                    <div className={"user_card_image_container"}>
                        <img className={"center user_card_image"} onLoad={()=>ifImageIsLoaded()} src={(user.image)}/>
                        {!imageLoaded && <div className="center"><LoadingView></LoadingView></div>}
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
                            sessionStorage.setItem("user_language", user.language);
                            setLanguage();
                         }
                         }>
                        <h6 className={"center"}>SELECT USER</h6>
                    </div>
                </div>
                <div className={"learn_card_watched_container"}>
                    <div className={"learn_card_watched center"}>
                        {(user.userId === selected) ? (<CheckmarkIcon
                            className={"checkmark_icon_learn_product star_user center"}
                        />) : (<CheckmarkIcon
                            className={"checkmark_icon_learn_product_empty center"}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    )
}