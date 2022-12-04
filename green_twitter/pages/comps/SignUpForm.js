import React from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
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

export default function Signup() {

  const router = useRouter()
  
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      setRegisterEmail("");
      setRegisterPassword("");
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      console.log(user);
      router.push('/home');
    } catch(error) {
      console.log(error.message)
    }
  }

  const handleSubmit = event => {
    console.log("handle submit rand")
    event.preventDefault();
    event.target.reset();
  }

  return (
    <FormCont action="/Homepage" onSubmit={handleSubmit}>
      <h2>Register</h2>
          <FormInput required placeholder="Enter email..." onChange={(event) => {setRegisterEmail(event.target.value)}}/>
          <FormInput required placeholder="Enter password..." onChange={(event) => {setRegisterPassword(event.target.value)}}/>
        <SubmitButton onClick={register} type="submit"className="">Submit</SubmitButton>
    </FormCont>
  )
}