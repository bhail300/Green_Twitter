import React from 'react';
import {  signInWithPopup, 
          createUserWithEmailAndPassword, 
          onAuthStateChanged, 
          signInWithEmailAndPassword,
          signOut
        } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../firebase/firebase.config';


export default function Home() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  const register = async () => {
    try {
      setRegisterEmail("");
      setRegisterPassword("");
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
    } catch(error) {
      console.log(error.message)
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch(error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
    <div className="">
      <h3 className="">Welcome to the app</h3>
      <div className="">
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <div className="">
            <div className="">
              <label>Email</label>
              <input
                placeholder="Email..."
                onChange={(event) => {
                  setRegisterEmail(event.target.value)
                }}
                className=""
              />
              <label>Password</label>
              <input
                placeholder="Password..."
                onChange={(event) => {
                  setRegisterPassword(event.target.value)
                }}
                className=""
              />
            </div>
            <button onClick={register} type="submit" className="">Register User</button>
            <button onClick={() => GoogleSignIn()} type="submit" className="">Log In With Google</button>
          </div>
        </form>

        <form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="">
            <div className="">
              <label>Email</label>
              <input
                placeholder="Email..."
                onChange={(event) => {
                  setLoginEmail(event.target.value)
                }}
                className=""
              />
              <label>Password</label>
              <input
                placeholder="Password..."
                onChange={(event) => {
                  setLoginPassword(event.target.value)
                }}
                className=""
              />
            </div>
            <button onClick={login} type="button" className="">Login User</button>
          </div>
        </form>

        <div className="">
          <h2>User Logged in:</h2>
          <div className="">
            {user?.email}
          </div>
          <button onClick={logout} type="button" className="">Sign Out</button>
        </div>
      </div>
    </div>
  )
}