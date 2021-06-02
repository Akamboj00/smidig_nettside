import React, {useState, useEffect} from "react";
import "./product.css";
import {Link, useLocation} from "react-router-dom";
import {useParams} from 'react-router-dom';
import fire from "../../server/firebase";
import {getDatabaseSingleProgress} from '../../components/lib/fb'
import {LoadingView} from "../loadingView";
import {CheckmarkEmptyIcon, CheckmarkIcon} from "../svg/svg";

require("url:../img/battery.png");
require("url:../img/lampshade.png");
require("url:../img/solarpanel.png");
require("url:../img/turtlelamp.png");

export const Product = () => {
    const [products, setProducts] = useState(null);
    const [productsOnUsers, setProductsOnUsers] = useState(null)
    const [authKey, setAuthKey] = useState(() => {
        let key = Object.keys(window.sessionStorage)
            .filter(item => item.startsWith('firebase:authUser'))[0];
        if (key === undefined) return history.push("/login");
        return key;
    });
    let location = useLocation();
    const {id} = useParams();
    console.log(id)

    async function getDatabaseSingleProgress() {
        const dbReference = fire.database().ref();

        dbReference.child("progress").child(sessionStorage.getItem("current_product_id")).once('value').then((snapshot) => {
            setProducts(snapshot.val());
        });
        const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));

        dbReference.child('users').child(authUser.uid).once('value').then((snapshot) => {
            setProductsOnUsers(snapshot.val())
        })
    }

    useEffect(() => {
        getDatabaseSingleProgress()
    }, []);

    if (location._product_name != null && location._product_id != null)
    {
        sessionStorage.setItem("current_product", location._product_name)
        sessionStorage.setItem("current_product_id", id)
    }
    if (authKey === null)
    {
        history.push("/users")
    }
    if (products === null || productsOnUsers === null)
    {
        return (
            <div id={"container_main"}>
                <div className="learn_card_container">
                    <LoadingView></LoadingView>
                </div>
            </div>
        )
    }
    else
    {
        return (
            <>
                <div id={"container_main"}>
                    <h2 className="product_name"><span className={sessionStorage.getItem("current_product") == "Home" ? "notranslate" : ""}>{sessionStorage.getItem("current_product")}</span></h2>
                    <div className={"wrap_container wrap_content"}>
                        <div className={"container_inner"}>
                            <div className="learn_card_product_container">
                                {products.map(({part_id, part_image, part_name, part_video}) => (
                                    <Link
                                        style={
                                            {
                                                textDecoration: "none",
                                                backgroundColor: (productsOnUsers[sessionStorage.getItem("user")].progress[id][part_id]) ? "#f2f2f2" : "#ffffff",
                                            }
                                        }
                                        key={part_id}
                                        className="learn_card_product"
                                        to={{
                                            pathname: "/video", video: part_video, product: id, part: part_id,
                                            _part_name: part_name
                                        }}
                                    >
                                        <div className={"learn_card_product_watched_container"}>
                                            <div className={"learn_card_product_watched center"}>
                                                {(productsOnUsers[sessionStorage.getItem("user")].progress[id][part_id]) ? (<CheckmarkIcon
                                                    className={"checkmark_icon_learn_product center"}
                                                />) : (  <CheckmarkEmptyIcon
                                                    className={"checkmark_icon_learn_product_empty center"}
                                                />)}
                                            </div>
                                        </div>
                                        <div className={"learn_product_image_container"}>
                                            <img className="learn_card_icon_product center" src={part_image}/>
                                        </div>
                                        <div className="card_info_product center">
                                            <div className="tooltip_learn">
                                                <span className="tooltiptext"><p className={"center"}>{part_name}</p></span>
                                            </div>
                                            <h6 className="learn_card_text_product">{part_name}</h6>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
