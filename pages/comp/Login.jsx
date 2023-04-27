import React from "react";
import { useState } from "react";
import { auth } from "../firebase"; 
import NextLink from 'next/link'
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=> {
      console.log((userCredential));
    }).catch((error)=> {
      console.log(error);
    })

  } 

    return (
        <div className="background">
        <div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>LOGIN</h1>
      <form onSubmit={signIn}>
        <input 
        type='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Email'/>

        <input 
        type='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='Password'
        />
        <button type="submit">Submit</button> 
        <NextLink href={"/register"}>
        <button type="register2">New here? Register</button>
        </NextLink>
      </form>
      </div>
    </div>
    )
}

export default Login