import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../firebase/firebase.config';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const CircularButton = styled.button`
width: 100px;
height:100px;
padding: 1%;
font-size: 15px;
border:1px solid #ffffff;
border-radius: 20px;
margin: 5%;

box-shadow: 0 0 5pt 0.5pt #D3D3D3;
background-color: #D3FFC8;
border-radius: 50%;
`

export default CircularButton