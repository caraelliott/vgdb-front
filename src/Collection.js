import React,{useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom'
import BackImage from './assets/remote-background.webp'
import styled ,{ createGlobalStyle } from 'styled-components';
import {GameDB, Game} from './components/GamesDB'









const Collection=() =>{


    const [data, setData]= useState([])

    useEffect(()=>{
        handleFetchGames()
          },[])

    const handleFetchGames = async () => {
        let newData = []
    
        let response =  await fetch("https://api.rawg.io/api/games?key=7a9b3b28689a4a8e92b35a7ee84a70e5&page=1&page_size=1"); 
        newData = await response.json();
        console.log(newData);
     
        setData(newData)
    
    
    }
  












    return(
        <div>
             <GlobalStyle/>

            <Head/>
            
            {data.count>0 ?
            <Disp>
            <GameDB data={data}/></Disp> : ""
            }
            
          
      
        </div>
    )

}
export default Collection


const Head =() =>{
    return(
        <HeaderStyle>
        <NavLink
        className="navbar-item"
        activeClassName="is-active"
        to="/"
        exact
    >
        Home
    </NavLink>
    <h2>Collection</h2>
    </HeaderStyle>

    )

}
const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
  font-family: 'Press Start 2P', cursive;
  
 

}`
const HeaderStyle= styled.div`
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:99vw;
        font-family: 'Press Start 2P', cursive;
        padding-left:10px;
        
        `
const Disp= styled.div`
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;

     
        
        `
     