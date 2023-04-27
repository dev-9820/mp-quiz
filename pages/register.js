import NextLink from 'next/link'
import { useState } from 'react'
import axios from 'axios';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { set } from 'mongoose';


const Register=()=>{

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function signUp(e){
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential)=> {
      console.log((userCredential));
    }).catch((error)=> {
      console.log(error);
    })
    
  }


    return(
        <div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>REGISTER</h1>
      <form onSubmit={signUp}>
        <input 
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />

        <input 
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
        />
        <NextLink href={"/"}>
        <button type="submit">Submit</button> 
        </NextLink>
        <NextLink href={"/"}>
        <button type="register1">Already Registered? Login</button>
        </NextLink>
      </form>
            
        </div>
    )
}

export default Register;