import React from "react";
import "./login.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import fetchUsers from "../redux/fetchUsers";

function Login() {
  const dispatch = useDispatch();

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <h1>Sign in to C__Corner</h1>
        <h5>C__Corner.slack.com </h5>
        <Button onClick={() => dispatch(fetchUsers())}>
          Sign in With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
