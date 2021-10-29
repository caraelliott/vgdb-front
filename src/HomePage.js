





import React,{useState, useEffect} from 'react';


import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Login from './components/Login'
// import GlobalStyle from './theme/globalStyle';
import BackImage from './assets/background.jpg'

import GameMap from './components/GameMap'
// import { Carousel } from '@trendyol-js/react-carousel';







import styled ,{ createGlobalStyle } from 'styled-components';




function HomePage() {
  const adminUser ={
    email:"admin@admin.com",
    password:"admin123"

  }


  const [user, setUser]= useState({name:"", email:""});
  const [error, setError]= useState("");
  const [logged, setLogged]= useState(false)
  const [data, setData]= useState([])

  useEffect(()=>{
    handleFetchGames()
      },[])




    const handleFetchGames = async () => {
      let newData = []
  
      let response =  await fetch("https://api.rawg.io/api/games?key=7a9b3b28689a4a8e92b35a7ee84a70e5&page=4&page_size=3"); 
      newData = await response.json();
      console.log(newData);
   
      setData(newData)
  
  
  }




  

  const LoginUser = details =>{
    console.log(details);

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("logged in")
      setUser({
        name:details.name,
        email:details.email,
      })
      setLogged(prevlogged =>!prevlogged) }
    else{
      console.log("details do not match")
      setError("Details do not match")
    }

  }

  const Logout = () =>{
    console.log("logout")
    setUser({name:"", email:""})
    setLogged(prevlogged =>!prevlogged) }
  

  // const logStatus =() =>{
  //   setLogged(true)
  // }


  return (
    <>
  

   
 
    <GlobalStyle/>
    <Header user={user.name} logged={logged} logout={Logout}/>
    {!logged ?
    <Login user = {user} login={LoginUser} error={error} logout={Logout} />:""}

    {/* <button onClick={handleFetchGames}>fetchData</button> */}
   
 

    {(data.count > 0 && logged) ? 
        
          <GameMap data={data}/>


             :<h3>Loading the Games...</h3>}
  




    
    </>
  )
}




const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;

  background-image: url(${BackImage});
  background-size: cover;
  font-family: 'Press Start 2P', cursive;
  
 

}`


export default HomePage;