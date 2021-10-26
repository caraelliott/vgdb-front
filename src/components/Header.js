import React from "react";
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import cartridge from '../assets/cartridge.png'



const HaederStyle= styled.div`
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:99vw;
      
        font-family: 'Press Start 2P', cursive;
        background:rgba(196, 196, 196, 1);
        padding-left:10px;
        
        `

const Button = styled.button`
        border: 0;
        text-decoration: none;
        background:none;`

const Header = () =>{
    return(
        <>
        <HaederStyle>
        <Hamburger size ={40}/>
        <h1>Home Page</h1>
        <Button><img src ={cartridge}/></Button>
        </HaederStyle>



        </>



    )

}
export default Header;