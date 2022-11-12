import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import React from "react";
import { useNavigate } from "react-router-dom";

function AuthPage({ type }) {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));

        if (type === "candidate") {
          if (!true) {
            navigate("candidate/profile");
          } else {
            navigate("/candidate/onboarding");
          }
        } else {
          if (!true) {
            navigate("employer/profile");
          } else {
            navigate("/employer/onboarding");
          }
        }
      })
      .catch((error) => {
        // Handle Errors here.
        console.log(error);
      });
  };
  return (
    <div>
      <h1>Welcome {type} please Signin</h1>
      <h3>Signin with google</h3>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default AuthPage;
