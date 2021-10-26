import React from "react";
import styled from 'styled-components';



const FormLogin = styled.div`
        width:40vh;
        height:60vh;
        position:absolute;
        top:30%;
        right:20%;
        background:rgba(196, 196, 196, 0.8);
        text-align:center;
        font-family: 'Press Start 2P', cursive;

`


const Login =(props)=>{
    return(
        <FormLogin>
        {(props.user.name != "") ? (<div>
            <h2>Welcome! {props.user.name}</h2>
                <button>Logout</button></div>) : (<h3>login</h3>)}</FormLogin>)
            }


export default Login;