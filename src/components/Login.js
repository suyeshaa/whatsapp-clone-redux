import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import logo from "../assets/logo.png";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/userAction";
// import { useSelector } from "react-redux";

const Login = () => {
  // const sta = useSelector(state => state.state)
  const dispatch = useDispatch();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch(setUser(result.user));
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="" />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>
        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
};

export default Login;
