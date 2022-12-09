import React from 'react';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useState }  from 'react';
import { auth } from '../../firebase/firebase.config';
import { useRouter } from 'next/router';
import styled, { isStyledComponent } from 'styled-components';
import { Container, Icon } from 'semantic-ui-react';

const CircularButton = styled.button`
width: 100px;
height:100px;
padding: 1%;
font-size: 15px;
border:none;
margin: 5%;
box-shadow: 0 0 5pt 0.5pt #D3D3D3;
background-color: #D4D3EF;
border-radius: 50%;
margin-left:900px;
margin-top:500px;
`

export default CircularButton

