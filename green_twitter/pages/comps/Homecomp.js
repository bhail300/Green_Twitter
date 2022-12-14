import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../firebase/firebase.config';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import BasicButton from './Button';

const SubmitButton = styled.button`
width: 100%;
padding: 1%;
font-size: 15px;
border:1px solid #363630;
border-radius: 20px;
margin: 5%;
border: none;
box-shadow: 0 0 5pt 0.5pt #D3D3D3;
background-color: #D3FFC8;
`

export default function Homecomp() {

  const router = useRouter()

  const [user, setUser] = useState({});

  const logout = async () => {
    await signOut(auth);
    console.log("user logged out");
    router.push('/');
  }

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  return (
    
    <div className="">
      <div className="">
        <div className="">
          <h2>Welcome User!</h2>
          <div className="" style={{color:'black'}} >
            {user?.email}
          </div>
          <SubmitButton onClick={logout} type="button" className="">Log Out</SubmitButton>
        </div>
      </div>
    </div>
  
 
  )
}