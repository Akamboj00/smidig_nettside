import React, {useState} from "react";
//import { postJson } from "../../client/lib/http";
import {postJson} from "../client/lib/http";
import {useHistory} from "react-router";
import {useSubmit} from "../client/lib/useSubmit";
import {InputField} from "../components/inputField";
import fire from "../server/firebase";
import "./login.css";

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
            await fire.auth().signInWithEmailAndPassword(email, password);
            await postJson("/api/login", {email: email, password});
        },
        () => history.push("/MainMenu")
    );

    return (
        <div className={"login_page_container"}>
            <div className={"login_page"}>
                <div className={"login_page_background"}></div>
                <div className="loginContainer center">
                    <div className={"login_header_container"}>
                        <div className={"login_header_learnBright"}>
                            <h1 className={"center"}>LearnBright</h1>
                        </div>
                        <div className={"login_header_description"}>
                            <h5 className={"center"}>Login to continue</h5>
                        </div>
                    </div>
                    <div className={"loginFormContainer"}>
                        <form className={"loginForm"} onSubmit={handleLogin}>
                            {submitting && <div>Please wait</div>}
                            {error && <div>Error: {error.toString()}</div>}
                            <InputField
                                className="loginEmail"
                                label={"Email"}
                                value={email}
                                type="email"
                                onValueChange={setEmail}
                            />
                            <InputField
                                className="loginInputField loginPassword"
                                label={"Password"}
                                type="password"
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
    );
}
