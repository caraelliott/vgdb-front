import React from "react";
import styled from 'styled-components';

const Nav = styled.ul`
        font-family: 'Press Start 2P', cursive;
        border:2px solid #39ff13;
        display:flex;
        padding-top:30px;
        width:20vw;
        height:80vw;
        margin-top:0;
        background:rgba(196, 196, 196, 0.8);
        flex-direction: column;
    
`
const Li = styled.div`
        padding:10px;`




const Navbar = () =>{

    return (
        <>
        <Nav>
        <Li>Home</Li>
        <Li>Discover</Li>
        <Li>Dashboard</Li>
        <Li>Profile</Li>
      
        </Nav>
       </>
    )

}

export default Navbar;