import React, { useContext, useState } from "react";
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from "./firebase.config";
import {UserContext} from "../Home/Home"
import { useHistory, useLocation } from "react-router";
// import { useForm } from "react-hook-form";

import  {initializeLoginFramework, handleGoogleSignIn, handleSignOut,  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./LoginManager"


// if (!firebase.apps.length) {
//     firebase.initializeApp(firebaseConfig);
//  }else {
//     firebase.app(); // if already initialized, use that one
//  }



const Login = () => {

    
    
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
    });

    const handleResponse = (res, redirect) => {
        setUser(res);
        setLoggedInUser(res);
        
        // console.log(res);
        if(redirect){
        history.replace(from);
        }
    }

    
  const googleSignIn = () => {
    handleGoogleSignIn()
    .then(res=> {
        console.log(res);
      handleResponse(res,true);
    })
  };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
      .then(res => {
        //   console.log(res);
        handleResponse(res,true);
      })
    }
    if (!newUser && user.email && user.password) {
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            console.log(res);
          handleResponse(res,true);
        })
      }
      e.preventDefault();
    };


  const signOut = () => {
    handleSignOut()
    .then(res=> {
      handleResponse(res,false);
    })
  };

  const handleBlur = (event) => {
    let isFormValid = true;
    if (event.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(event.target.value);
      // console.log(isEmailValid);
    }
    if (event.target.name === "password") {
      const isPasswordValid = event.target.value.length >= 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFormValid = isPasswordValid && passwordHasNumber;
    }
    
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  };
  

    

    
//   const handleGoogleSignIn = () => {
//     var googleProvider = new firebase.auth.GoogleAuthProvider();

//     firebase
//       .auth()
//       .signInWithPopup(googleProvider)
//       .then((result) => {
//         /** @type {firebase.auth.OAuthCredential} */
//         var credential = result.credential;

//         // This gives you a Google Access Token. You can use it to access the Google API.
//         var token = credential.accessToken;
//         // The signed-in user info.
//         var {displayName, email} = result.user;
//         const signedInUser = {name: displayName, email: email};
//         setLoggedInUser(signedInUser);
//         history.replace(from);
//         // ...
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // The email of the user's account used.
//         var email = error.email;
//         // The firebase.auth.AuthCredential type that was used.
//         var credential = error.credential;
//         // ...
//       });
//   };
  const loginStyle = {
      textAlign: 'center'
  }
  return (
    <div style={loginStyle}>
      
      <div style={{textAlign: 'center'}}>
      {user.isSignedIn ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={googleSignIn}>Sign in</button>
      )}
      <br />
      {/* <button onClick={fbSignIn}>Faceboo Sign In</button>
      <br />
      <button onClick={githubSignIn}>Github Sign In</button> */}

      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}

      <div>
        <h1>Our Own Authentication</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="checkbox"
            onChange={() => setNewUser(!newUser)}
            name="newUser"
            id=""
          />
          <label htmlFor="newUser">New User Sign Up</label>
          <br />
          {newUser && (
            <input onBlur={handleBlur} name="name" type="text" placeholder="Enter Your Name" />
          )}
          <br />
          <input
            type="text"
            onBlur={handleBlur}
            name="email"
            id=""
            placeholder="Enter your email"
            required
          />
          <br />
          <input
            type="password"
            onBlur={handleBlur}
            name="password"
            id=""
            placeholder="Enter your password"
            required
          />
          <br />
          <input type="submit" value={newUser ? "Sign Up" : "Sign In"} />
        </form>
        <p style={{ color: "red" }}>{user.error}</p>
        {user.userCreated && (
          <p style={{ color: "green" }}>
            {" "}
            User {newUser ? "created" : "Logged in"} Successfully
          </p>
        )}
      </div>
    </div>
    </div>
  );
}

export default Login;
