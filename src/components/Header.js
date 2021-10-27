import React from "react";
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import cartridge from '../assets/cartridge.png'
import Userprofile from './Userprofile';



const HaederStyle= styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:99vw;
        font-family: 'Press Start 2P', cursive;
        padding-left:10px;
        
        `

const Button = styled.button`
        border: 0;
        text-decoration: none;
        background:none;`

const Header = ({user, logged,logout}) =>{
    return(
        <>
        <HaederStyle>
        <Hamburger size ={40}/>
        <h1>Home Page</h1>
        
        <Userprofile user={user} logged={logged} logout={logout}/>
        <Button><img src ={cartridge} size={10}/></Button>
        </HaederStyle>



        </>



    )

}
export default Header;