
import React from "react";
import { auth } from "./firebase";
import Login from "./Login";
import TestSwipe from "./TestSwipe";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Home() {
    const [user, setUser] = React.useState(null);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
            console.log("User is signed in");
        } else {
            console.log("User is signed out");
        }
    });

  return (
    <>
    {user ? <TestSwipe /> : <Login />}
    </>
  );
}


export default Home;
