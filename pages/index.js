import axios from 'axios'
import {signInWithEmailAndPassword} from 'firebase/auth';
import NextLink from 'next/link'
import home from './home'
import { useCallback, useState } from 'react';
import {auth} from '../pages/firebase'
import Login from './comp/Login';
import app from './firebase'

const login= ()=> {

  return (
    <Login/>  
    
        
  )
}

export default login;