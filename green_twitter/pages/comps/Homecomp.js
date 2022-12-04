import React from 'react';
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../firebase/firebase.config';


export default function Homecomp() {

  const [user, setUser] = useState({});

  const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  return (
    <div className="">
      <div className="">

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