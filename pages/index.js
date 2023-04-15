import NextLink from 'next/link'
import home from './home'

const login= ()=> {
  return (
    <div className='login-container'>
      <h1>LOGIN</h1>
      <form>
        <input type='text' placeholder='Username'/>
        <input type='password' placeholder='Password'/>
        <label>Register</label>
        <NextLink href='/home'>
        <button type='submit'>Submit</button>
        </NextLink>
      </form>
      </div>
  )
}

export default login;