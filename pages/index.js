import axios from 'axios'
import NextLink from 'next/link'
import home from './home'
import { useCallback, useState } from 'react'


const login = () => {
  return (
    <div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>LOGIN</h1>
      <form>
        <input 
        type='email'
        id='email'
        placeholder='Email'/>
        <input 
        type='password'
        id='password'
        placeholder='Password'
        />
        <button type="submit">Submit</button> 
        <button onClick={""} type='register'>New here? Register</button>
      </form>
      </div>
  )
  }

  export default login;