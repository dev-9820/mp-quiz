import axios from 'axios'
import React from 'react';
import {signInWithEmailAndPassword} from 'firebase/auth';
import NextLink from 'next/link'
import home from './home'
import { useCallback, useState } from 'react';
import {auth} from '../pages/firebase'
import Login from './comp/Login';
import app from './firebase'

export default function Index(){

  return (
    <Login/>
  )
}