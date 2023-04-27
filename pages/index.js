import axios from 'axios'
import {signInWithEmailAndPassword} from 'firebase/auth';
import NextLink from 'next/link'
import home from './home'
import { useCallback, useState } from 'react';
import {auth} from "../node_modules/firebase/auth"

export default function login () {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');


  const logIN = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=> {
      console.log((userCredential));
    }).catch((error)=> {
      console.log(error);
    })
    
  }

  return (
    <div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>LOGIN</h1>
      <form onSubmit={logIN}>
        <input 
        type='email'
        name='email'
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='email'/>

        <input 
        type='password'
        name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        placeholder='password'
        />
        <button type="submit">Submit</button> 
        <NextLink href={"/register"}>
        <button type="register2">New here? Register</button>
        </NextLink>
      </form>
      </div>
  )
  }