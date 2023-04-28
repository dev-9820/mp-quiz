import NextLink from 'next/link'
import { useState } from 'react'
import axios from 'axios';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { set } from 'mongoose';
import styles from 'styles/Home.module.css'
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/router';


const Register = () => {
  
  const router = useRouter();
const [errorMsg, setErrorMsg] = useState("")
const [submitButtonDisabled , setSubmitButtonDisabled] = useState(false);
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [username, setUsername] = useState('');


function signUp(e){
  e.preventDefault();
  setSubmitButtonDisabled(true);
  createUserWithEmailAndPassword(auth,email,password)
  .then(async(res)=> {
    const user = res.user;
    await updateProfile(user, {
      displayName: username,
    })
    setSubmitButtonDisabled(false);
    router.push('/home')
    alert("ACCOUNT CREATED!",{username})
  }).catch((error)=> {
    console.log(error);
    setSubmitButtonDisabled(false);
    setErrorMsg(error.message)
  })

  if(!email || !password || !username){
    setErrorMsg("Fill All Fields");
    return;
  }
  setErrorMsg("")
}
return(
<div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>REGISTER</h1>
      <form onSubmit={signUp}>
      <input 
        type='username'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        />

        <input 
        label='Email'
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
         <b className={styles.error}>{errorMsg}</b>
        <button
        disabled={submitButtonDisabled}
        type="submit">
          Submit
        </button> 
        
       
        
        <NextLink href={"/"}>
        <button type="register1">Already Registered? Login</button>
        </NextLink>
      </form>
            
        </div>
)
}

export default Register;