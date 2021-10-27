import React from "react";
import styled from 'styled-components';
import LoginForm from './LoginForm';



const FormLogin = styled.div`
      ;
        position:absolute;
        top:30%;
        right:20%;
        box-shadow: 9px 10px 6px 1px rgba(0,0,0,0.75);

        text-align:center;
        font-family: 'Press Start 2P', cursive;

`


const Login =({user,login,error,logout,logged})=>{
    ;
    return(
        <FormLogin>
        {(user.name != "") ? (
           <div>welcome</div>)
         : (<LoginForm  login={login} error={error}/>)}</FormLogin>)
            }


export default Login;