import NextLink from 'next/link'
import home from './home'

const login= ()=> {
  return (
    <div type="cont" className='login-container'>
      <h1>LOGIN</h1>
      <form>
        <input type='text' placeholder='Username'/>
        <input type='password' placeholder='Password'/>
        <NextLink href='/home'>
        <button type='submit'>Submit</button> 
        </NextLink>
        <button type='register'>New here? Register</button>
       
      </form>
      </div>
  )
}

export default login;