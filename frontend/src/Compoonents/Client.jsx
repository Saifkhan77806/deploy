import React, { useEffect, useLayoutEffect } from 'react'
import Home from './Home'
import Slideshow from './Slideshow'
import Whychooseus from './Whychooseus'
import Trynow from './Trynow'
import Contactus from './Contactus'
import Review from './Review'
import Footer from './Footer'
import axios from 'axios'
import Slide from './Slide'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../store/auth'

const Client = () => {

  // axios.get("https://backend-ashen-gamma.vercel.app/auth/callback/success").then((res)=>{
  //   console.log(res.data)
  // }).catch((err)=>{
  //   console.log("log",err)
  // })

  useEffect(()=>{
    axios.get("https://backend-kappa-drab.vercel.app/cookie").then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log("log",err)
      })
  },[])
  const navigate = useNavigate()
  const {userData} = useAuth()


  console.log("userdata", userData)
  if(userData?.logtype=="register"){
    navigate("/register-info")
  }

  if(userData?.logtype=="user already exist"){
    window.location.href = 'https://backend-ashen-gamma.vercel.app/logout';
  }

 
  return (
    <>
    <div className='min-w-full w-[100vw] max-w-full'>
    <Home />
    <Slide />
    <Trynow />
    <Whychooseus />
    <Contactus />
    <Review />
    </div>
    <Footer />
    </>
  )
}

export default Client