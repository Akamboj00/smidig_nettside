import React, { useState } from "react";
//import { postJson } from "../../client/lib/http";
import { postJson } from "../client/lib/http";
import { useHistory } from "react-router";
import { useSubmit } from "../client/lib/useSubmit";
import { InputField } from "../components/inputField";
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
      await postJson("/api/login", { email: email, password });
    },
    () => history.push("/MainMenu")
  );

  return (
    <div className="loginContainer">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        {submitting && <div>Please wait</div>}
        {error && <div>Error: {error.toString()}</div>}
        <InputField
          className="loginMail"
          label={"Email"}
          value={email}
          onValueChange={setEmail}
        />
        <InputField
          className="loginPassword"
          label={"Password"}
          type="password"
          value={password}
          onValueChange={setPassword}
        />
        <button disabled={submitting}>Log in</button>
      </form>
    </div>
  );
}
