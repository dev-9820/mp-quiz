import NextLink from 'next/link'
import { useState } from 'react'
import axios from 'axios';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { set } from 'mongoose';
import { Link } from 'react-router-dom';

const Register = () => {


const [errorMsg, setErrorMsg] = useState("")

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmission = () => {
  
}

function signUp(e){
  e.preventDefault();
  createUserWithEmailAndPassword(auth,email,password)
  .then((userCredential)=> {
    console.log((userCredential));
    alert("ACCOUNT CREATED!")
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
        
        <button type="submit">Submit</button> 
        
        <b>{errorMsg}</b>
        
        <NextLink href={"/"}>
        <button type="register1">Already Registered? Login</button>
        </NextLink>
      </form>
            
        </div>
)
}

export default Register;