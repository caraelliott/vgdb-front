import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Image from './components/Image'
import Login from './components/Login'

import styled from 'styled-components';
import React,{useState} from 'react';



function App() {
  const adminUser ={
    email:"admin@admin.com",
    pssword:"admin123"

  }


  const [user, setUser]= useState({name:"", email:""});
  const [error, setError]= useState("")

  const LoginToken = details =>{
    console.log(details);

  }

  const Logout = () =>{
    console.log("logout")
  }



  return (
    <>
    <Container>
    <Header/>
    <Image/>
    <Login user = {user} />
    <Navbar/>
    
    </Container>
    </>
  )
}


const Container = styled.div`
      overflow:hidden;`



export default App;


