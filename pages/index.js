import axios from 'axios'
import NextLink from 'next/link'
import home from './home'
import Input from '../components/input'
import { useCallback, useState } from 'react'

const login= ()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = useCallback(async () => {
    try{
      await axios.post('/api/register', {
        email,
        password
      });
    }catch(error){
      console.log(error);
    }
  }, [email, password]);

  return (
    <div type="cont" className='login-container'>
      <title>SolveIT</title>
      <h1>LOGIN</h1>
      <form>
        <Input 
        value={email} 
        id="email" 
        onChange={(ev)=> setEmail(ev.target.value)} 
        type="text" 
        label="Email"/>

        <Input 
        value={password} 
        id="password" 
        onChange={(ev)=> setPassword(ev.target.value)} 
        type="password" 
        label="Password"/>
        
        <button onClick={register}>Submit</button> 
        
        <button type='register'>New here? Register</button>
      </form>
      </div>
  )
}

export default login;