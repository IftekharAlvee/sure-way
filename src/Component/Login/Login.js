import React, { useContext, useState } from "react";
import {UserContext} from "../Home/Home"
import { useHistory, useLocation } from "react-router";
import  {initializeLoginFramework, handleGoogleSignIn, handleSignOut,  createUserWithEmailAndPassword, signInWithEmailAndPassword } from "./LoginManager"
import { Container } from "@material-ui/core";



const Login = () => {

    
    initializeLoginFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
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
  


  const loginStyle = {
      textAlign: 'center'
  }
  return (
    <div style={loginStyle}>
      
      <div style={{textAlign: 'center'}}>
      {user.isSignedIn ? (
        <button onClick={signOut}>Sign out</button>
      ) : (
        <button onClick={googleSignIn}>Google Sign in</button>
      )}
      <br />
     

      {user.isSignedIn && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      )}

      <div > 
        <h1>Our Own Authentication</h1>
       
       <Container>
       <div className="form-box">
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


        </div>
       </Container>
        
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
