import NextLink from 'next/link'
import { useState } from 'react'
import axios from 'axios';
import { auth } from './firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { set } from 'mongoose';
import Register from './comp/Register';


const register=()=>{
    return(
        <Register/>
    )
}

export default register;