import axios from 'axios'
import NextLink from 'next/link'
import home from './home'
import { useCallback, useState } from 'react'


export default function login () {

const [loginEmail, setLoginEmail] = useState('');
const [loginPassword, setLoginPassword] = useState('');


  return (
    <div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>LOGIN</h1>
      <form>
        <input 
        type='text'
        name='email'
        placeholder='email'/>
        <input 
        type='password'
        name='password'
        placeholder='password'
        />
        <button type="submit">Submit</button> 
        <NextLink href={"/register"}>
        <button type="register">New here? Register</button>
        </NextLink>
      </form>
      </div>
  )
  }