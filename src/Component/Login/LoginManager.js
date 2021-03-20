import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () => {
    if (!firebase.apps.length) {       
        firebase.initializeApp(firebaseConfig);
    }else {
        firebase.app(); // if already initialized, use that one
    }
}


export const handleSignOut = () => {
    return firebase
    .auth()
    .signOut()
    .then((res) => {
      // const {displayName, photoURL, email} = res.user;
      const signedOutUser = {
        isSignedIn: false,
        displayName: "",
        email: "",
        password: "",
        photo: "",
        error: "",
        userCreated: false,
      };
      return signedOutUser;
    })
    .catch((err) => {});
};

export const handleGoogleSignIn = () => {
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();
      console.log("Sign in clicked");
      return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then((res) => {
          console.log(res);
          const { displayName, photoURL, email } = res.user;
  
          const signedInUser = {
            isSignedIn: true,
            displayName: displayName,
            email: email,
            photo: photoURL,
            userCreated: true,
          };
          return signedInUser;
        })
        .catch((err) => {
          console.log(err);
          console.log(err.messege);
        });
    };

    export const createUserWithEmailAndPassword = (name,email,password) => {
        return firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((res) => {
          // Signed in
          // var user = userCredential.user;
          const newUserInfo = res.user;
          
          newUserInfo.error = "";
          
          newUserInfo.userCreated = true;
          updateUserName(name);
        //   console.log(name);
          return newUserInfo;
          // ...
        })
        .catch((error) => {
          const newUserInfo = {};
          newUserInfo.error = error.message;
          newUserInfo.userCreated = false;
          
          return newUserInfo;
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
};

export const signInWithEmailAndPassword = (email, password) => {
    return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      // Signed in
      // var user = res.user;
      // ...
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.userCreated = true;
      console.log(newUserInfo)
      return newUserInfo;
    })
    .catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.userCreated = false;
      return newUserInfo;

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const updateUserName = (name) => {

    const user = firebase.auth().currentUser;

    user
    .updateProfile({
        displayName: name,
      })
      .then(function () {
        // Update successful.
        console.log("user name updated successfully");
      })
      .catch(function (error) {
        // An error happened.
        console.log(error);
      });
  };
