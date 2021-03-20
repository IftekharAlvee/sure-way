import React, { useContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import {UserContext} from "../Home/Home"
import { useHistory, useLocation } from "react-router";
import { useForm } from "react-hook-form";

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }



const Login = () => {

    

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleSubmit = () => {
        
    }
  const handleGoogleSignIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var {displayName, email} = result.user;
        const signedInUser = {name: displayName, email: email};
        setLoggedInUser(signedInUser);
        history.replace(from);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };
  const loginStyle = {
      textAlign: 'center'
  }
  return (
    <div style={loginStyle}>
      
      <h1>Authentication Page</h1>
      <form onSubmit={handleSubmit}>
      <input type="text" name="email" id="" placeholder="Enter your Email" required />
      <br/>
      <input type="password" name="password" id="" placeholder="Enter your Password" required />
      <br/>
      <input type="submit" value="Submit"/>
    </form>
    <button onClick={handleGoogleSignIn}>Google sign in</button>
    </div>
  );
};

export default Login;
