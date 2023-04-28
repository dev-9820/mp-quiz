import Cookies from "js-cookie";
import React from "react";
import { useState } from "react";
import { auth } from "../firebase"; 
import NextLink from 'next/link'
import { signInWithEmailAndPassword } from "firebase/auth";
import styles from 'styles/Home.module.css'
import { useRouter } from "next/router";


const Login = () => {


  const router = useRouter();
const [errorMsg, setErrorMsg] = useState("")
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');



  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=> {
      Cookies.set("loggedin",true);
    router.push("/home")
      console.log((userCredential));
    }).catch((error)=> {
      setErrorMsg(error.message)
      console.log(error);
      
    })
    if(!email || !password){
      setErrorMsg("Fill All Fields");
      return;
    }
    setErrorMsg("")
  }

   

    return (
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
        <b className={styles.error}>{errorMsg}</b>
        <button type="submit">Submit</button> 
        <NextLink href={"/register"}>
        <button type="register2">New here? Register</button>
        </NextLink>
      </form>
      </div>
    )
  }

export default Login