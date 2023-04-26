import NextLink from 'next/link'
import { useState } from 'react'
import axios from 'axios';


export default function Register(){

    return(
        <div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>REGISTER</h1>
      <form>
        <input 
        type='text'
        name='email'
        placeholder='Email'
        onChange={e => setRegisterEmail(e.target.value)}/>

        <input 
        type='password'
        name='password'
        placeholder='password'
        onChange={e => setRegisterPassword(e.target.value)}/>
        <button type="submit">Submit</button> 
        <NextLink href={"/"}>
        <button type="register1">Already Registered? Login</button>
        </NextLink>
      </form>
            
        </div>
    )
}