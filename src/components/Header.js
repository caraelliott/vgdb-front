import React from "react";
import styled from 'styled-components';
import Hamburger from 'hamburger-react';
import cartridge from '../assets/cartridge.png'
import Userprofile from './Userprofile';
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'



const HeaderStyle= styled.div`
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
        <HeaderStyle>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            <Hamburger size ={40}/>
            </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item ><Link to ="collection" >Show Collection</Link></Dropdown.Item>
            <Dropdown.Item><Link to ="MyWishList" >My WishList</Link></Dropdown.Item>
            <Dropdown.Item> <Link to ="MyList" >My List</Link></Dropdown.Item>

        </Dropdown.Menu>
        </Dropdown>
       
        
        
        <Userprofile user={user} logged={logged} logout={logout}/>
        <Button><img src ={cartridge} size={10}/></Button>
      
        </HeaderStyle>



        </>



    )

}
export default Header;