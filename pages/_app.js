import { useEffect, useState } from 'react'
import '../styles/globals.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../styles/Home.module.css'
import app, { auth } from './firebase'
import Register from './comp/Register'
import Home from './home'



export default function App({ Component,displayName, pageProps }) {

  const [userName, setUserName] = useState("");

  useEffect(()=> {
    auth.onAuthStateChanged(user=>{
      if(user){
        setUserName(user.displayName)
      }else setUserName("")
      console.log(user);
    })
  },[])

  return (
    <Component {...pageProps} />
    
    )
}
