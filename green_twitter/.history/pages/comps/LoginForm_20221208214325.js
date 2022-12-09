import React from 'react';
import {  onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../firebase/firebase.config';
import { useRouter } from 'next/router';
import styled from 'styled-components';

//Styles
const FormCont = styled.form`
display:flex;
flex-direction: column;
align-items:center;
`
const SubmitButton = styled.button`
width: 10%;
padding: 1%;
font-size:15px;
border:1px solid #363630;
border-radius: 10px;
margin: 5%;
border: none;
box-shadow: 0 0 5pt 0.5pt #D3D3D3;
background-color: #D3FFC8;
`
const FormInput = styled.input`
margin:15px;
padding:10px;
border-radius: 5px;
border: none;
box-shadow: 0 0 5pt 0.5pt #D3D3D3;
`

export default function Login() {

  const router = useRouter()

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  React.useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
  }, [])

  const login = async (e) => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
      router.push('/home');
    } catch(error) {
      console.log(error.message);
    }
  }


  return (
      <FormCont >
        <h2>Login</h2>
            <FormInput required placeholder="Enter email..." onChange={(event) => {setLoginEmail(event.target.value)}}/>
            <FormInput required placeholder="Enter password..." onChange={(event) => {setLoginPassword(event.target.value)}}/>
          <SubmitButton onClick={login} type="button" >Login</SubmitButton>
      </FormCont>
  )
}