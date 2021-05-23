import React, {useState} from "react";
//import { postJson } from "../../client/lib/http";
import {postJson} from "../client/lib/http";
import {useHistory} from "react-router";
import {useSubmit} from "../client/lib/useSubmit";
import {InputField} from "../components/inputField";
import firebase from "firebase";
import "./login.css";
import { LoadingView } from "../components/loadingView";
import Alert from 'react-bootstrap/Alert'

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const {
        handleSubmit: handleLogin,
        submitting,
        error,
    } = useSubmit(
        async () => {
            loginLight();
            await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
                return firebase.auth().signInWithEmailAndPassword(email, password);
            })
            await postJson("/api/login", {email: email, password});
        },
        () => history.push("/MainMenu")
    );

    const [trigger, setTrigger] = useState(false);

    async function moveLight(event){
        await callOnce();
        let flashlight = document.getElementById("flashlight");
        flashlight.style.clipPath = `circle(250px at ${event.offsetX + 15}px ${event.offsetY + 15}px)`;
    }

    function hoverLight(event){
        event.preventDefault();
        setTrigger(false);
        let flashlight = document.getElementById("flashlight");
        flashlight.style.transition = "1s";
        flashlight.style.clipPath = `circle(400px)`;
    }

    function loginLight(){
        let flashlight = document.getElementById("flashlight");
        flashlight.style.transition = "0.1s";
        flashlight.style.clipPath = `circle(300px)`;
        setTimeout(loginLightTransition1, 100);
    }

    function loginLightTransition1(){
        let flashlight = document.getElementById("flashlight");
        flashlight.style.transition = "0.1s";
        flashlight.style.clipPath = `circle(500px)`;
        setTimeout(loginLightTransition2, 100);
    }

    function loginLightTransition2(){
        let flashlight = document.getElementById("flashlight");
        flashlight.style.transition = "0.3s";
        flashlight.style.clipPath = `circle(2000px)`;
    }

    async function callOnce() {
        if (!trigger)
        {
            setTrigger(true);
            let flashlight = document.getElementById("flashlight");
            flashlight.style.transition = "0.4s";
            setTimeout(countDown, 300);
        }
    }

    function countDown(){
        let flashlight = document.getElementById("flashlight");
        flashlight.style.transition = "0.2s";
        setTimeout(countDown2, 200);
    }

    function countDown2(){
        let flashlight = document.getElementById("flashlight");
        flashlight.style.transition = "0.1s";
    }

    return (
        <div className={"login_page_container"}>
            <div className={"login_page"}>
                <div className={"login_page_background"}>
                </div>
                <div className={"darkness"} onMouseMove={() => moveLight(event)}>
                    <div id={"flashlight"}/>
                </div>
                <div className="loginContainer center">
                    <div className={"light_extra_trigger"} onMouseMove={() => hoverLight(event)}>
                    <div className={"login_header_container"}>
                        <div className={"login_header_learnBright"}>
                            <h1 className={"center"}>LearnBright</h1>
                        </div>
                        <div className={"login_header_description"}>
                        {submitting && <LoadingView/>}
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
                    </div>
                    <div className={"loginFormContainer"}>
                        <form className={"loginForm"} onSubmit={handleLogin}>
                            <InputField
                                className="loginEmail"
                                label={"Email"}
                                placeholder={"name@email.com"}
                                value={email}
                                type="email"
                                onValueChange={setEmail}
                            />
                            <InputField
                                className="loginInputField loginPassword"
                                label={"Password"}
                                type="password"
                                placeholder={"******"}
                                value={password}
                                onValueChange={setPassword}
                            />
                            <div className={"submitBtn_container"}>
                                <button className="submitBtn" disabled={submitting}>
                                    <h5 className={"center"}> Log in</h5>
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
