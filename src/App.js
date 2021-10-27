import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Login from './components/Login'
// import GlobalStyle from './theme/globalStyle';
import BackImage from './assets/background.jpg'


import styled ,{ createGlobalStyle } from 'styled-components';
import React,{useState} from 'react';



function App() {
  const adminUser ={
    email:"admin@admin.com",
    password:"admin123"

  }


  const [user, setUser]= useState({name:"", email:""});
  const [error, setError]= useState("");
  const [logged, setLogged]= useState(false)
  

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
   
    <Container>
    <GlobalStyle/>
    <Header user={user.name} logged={logged} logout={Logout}/>
 
    <Login user = {user} login={LoginUser} error={error} logout={Logout} />
 
    
    </Container>
    </>
  )
}


const Container = styled.div`
      overflow:hidden;
      `


const GlobalStyle = createGlobalStyle`
body {
  margin: 10px;
  padding: 10px;
  background-image: url(${BackImage});
  background-size: cover;
  box-shadow: 9px 10px 6px 1px rgba(0,0,0,0.75);

}`


export default App;


