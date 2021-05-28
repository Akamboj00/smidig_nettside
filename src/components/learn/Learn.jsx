import React, {useState, useEffect} from "react";
import "./learn.css";
import {ProgressBar} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import {useHistory} from "react-router";
import {LoadingView} from '../loadingView'
import fire from "../../server/firebase";
import {forEach} from "react-bootstrap/ElementChildren";

require("url:../img/test.png");
require("url:../img/sunbell_image.png");
require("url:../img/movesmart_image.png");
require("url:../img/startpluss_image.png");
require("url:../img/sunturtle_image.png");
require("url:../img/home_image.png");
require("url:../img/home_image.png");
require("url:../img/reporticon.png");
require("url:../img/reportIconBlue.png")
export const Learn = () => {
    const history = useHistory();
    if(sessionStorage.getItem("user") === null){
        history.push("/users");
        alert("Please select a user");
    }
    let location = useLocation()
    const [clicked, setClicked] = useState();
    const [users, setUsers] = useState(null);
    const [_progress, setProgress] = useState(null);
    const [total, setTotal] = useState(null);
    const [totalFinished, setTotalFinished] = useState(null);
    const [totalPercent ,setTotalPercent] = useState(null);
    const [authKey, setAuthKey] = useState(() => {
        let key = Object.keys(window.sessionStorage)
            .filter(item => item.startsWith('firebase:authUser'))[0];
        if (key === undefined) return history.push("/login");
        return key;
    });




    const [testData] = useState([
        {
            product_id: 0,
            product_name: "Learn Sunbell",
            product_img: "url:../img/sunbell_image.png",
            product_total_parts: 0,
            product_total_parts_done:0,
            product_progress: [],
        },
        {
            product_id: 1,
            product_name: "Learn MoveSmart",
            product_img: "url:../img/movesmart_image.png",
            product_total_parts: 0,
            product_total_parts_done:0,
            product_progress: [],
        },
        {
            product_id: 2,
            product_name: "Learn Start+",
            product_img: "url:../img/startpluss_image.png",
            product_total_parts: 0,
            product_total_parts_done:0,
            product_progress: [],
        },
        {
            product_id: 3,
            product_name: "Learn SunTurtle",
            product_img: "url:../img/sunturtle_image.png",
            product_total_parts: 0,
            product_total_parts_done:0,
            product_progress: [],
        },
        {
            product_id: 4,
            product_name: "Learn Home",
            product_img: "url:../img/home_image.png",
            product_total_parts: 0,
            product_total_parts_done:0,
            product_progress: [],
        },
        {
            product_id: 5,
            product_name: "Learn Report",
            product_img: "url:../img/reportIconBlue.png",
            product_total_parts: 0,
            product_total_parts_done:0,
            product_progress: [],
        },
    ]);


    const getData = () => {
        if (authKey)
        {
            const authUser = JSON.parse(sessionStorage.getItem(authKey.toString()));
            const dbReference = fire.database().ref();

            dbReference.child('users').child(authUser.uid).once('value').then((snapshot) => {
                if(!snapshot.exists()){
                    history.push("/users");
                    alert("Please create a user")
                }
                if (snapshot.val() != null)
                {
                    setUsers(snapshot.val());
                }
            });

            // TODO -> HOW TO SET ITEM
            //dbReference.child('users').child(authUser.uid).child("3").child("1").set(0);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    if (users === null)
    {
        return (
            loadComponent()
        );
    }

    if(_progress === null){
        const key = sessionStorage.getItem("user");
        setProgress(users[key].progress);
    }

    if (_progress === null)
    {
        return (
            loadComponent()
        );
    }

    let progressCountIndexBigMath = 0;

    for (let i = 0; i < _progress.length; i++)
    {
        progressCountIndexBigMath += _progress[i].length;
    }

    let calcTotal = 0;
    let calcTotalFinished = 0;
    if (total !== progressCountIndexBigMath)
    {
        for (let index = 0; index < _progress.length; index++)
        {
            testData[index].product_progress.push(_progress[index])

            for (let count = 0; count < _progress[index].length; count++)
            {
                testData[index].product_total_parts ++
                calcTotal++;
                if (_progress[index][count] === 1)
                {
                    calcTotalFinished++
                    testData[index].product_total_parts_done ++
                }
                if (calcTotal === progressCountIndexBigMath)
                {
                    setTotal(calcTotal);
                    setTotalFinished(calcTotalFinished);
                    setTotalPercent((calcTotalFinished / calcTotal) * 100);
                }
            }
        }
    }
    //bytter dette med request til firebase / eller backend
    if (total === null || totalFinished === null)
    {
        return (
            loadComponent()
        );
    }

    const total_progress = Math.floor(totalPercent);
    console.log()

    return (
        <>
            <div id={"container_main"}>
                <div className={"wrap_container wrap_header"}>
                    <div className={"container_inner"}>
                        <div className="learn_heading_container">
                            <h3 className="learn_text">Total learning progress for {users[sessionStorage.getItem("user")].firstName}</h3>
                            <ProgressBar className="learn_total_progress">
                                <ProgressBar
                                    className="learn_progress_background"
                                    animated
                                    now={total_progress}
                                />
                                <h5 className="progress_total_text h5 center">{`${total_progress}%`}</h5>
                            </ProgressBar>
                        </div>
                    </div>
                </div>
                <div className={"wrap_container wrap_content"}>
                    <div className={"container_inner"}>
                        <div className="learn_card_container">
                            {testData.map(
                                ({
                                     product_id,
                                     product_name,
                                     product_img,
                                     product_progress,
                                     product_total_parts,
                                     product_total_parts_done
                                 }) => (
                                    <Link
                                        style={{textDecoration: "none"}}
                                        key={product_id}
                                        className="learn_card"
                                        to={{pathname: `${"/product/" + product_id}`, _product_name : product_name}}
                                        onClick={() => setClicked(testData[product_id])}
                                    >
                                        <img
                                            className="learn_card_icon"
                                            src={require(product_img)}
                                        />
                                        <div className="card_info">
                                            <h4 className="learn_card_text">{product_name}</h4>
                                            <ProgressBar className={"learn_single_progress"}>
                                                <ProgressBar
                                                    className="progress_bar font-weight-bold"
                                                    animated
                                                    now={Math.floor(product_total_parts_done/product_total_parts * 100)}
                                                />
                                                <h4 className="progress_on_card center h6 single_progress_text">{`${Math.floor(product_total_parts_done/product_total_parts * 100)}%`}</h4>
                                            </ProgressBar>
                                        </div>
                                    </Link>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export function loadComponent() {
    return(
        <div id={"container_main"}>
        <div className={"wrap_container wrap_header"}>
            <div className={"container_inner"}>
                <div className="learn_heading_container">
                    <div className="learn_loading">
                        <LoadingView/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
