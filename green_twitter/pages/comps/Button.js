import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const RoundButton = styled.button`
width:100px;
height:100px;
padding: 1%;
font-size: 15px;
border-radius: 50%;
border: none;
box-shadow: 0 0 5pt 0.5pt #D3D3D3;
background-color: #D4D3EF;
position: fixed;
right:0;
bottom:0;
margin:40px;

`



export default function BasicButton ({

}){
    return ( 
    <RoundButton>
    <Icon name="plus" size='big'  style={{
            color:'white'
        }}   />
    </RoundButton> )
}

