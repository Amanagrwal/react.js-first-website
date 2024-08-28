import React from 'react'
import Web from "../src/image/shoping.jpeg";
import { NavLink } from "react-router-dom";
import Common from './Common'

function Home() {
  return (
    <>
      <Common 
         name = " Grow your business with"
         imgsrc={Web}
         visit = "/service"
         btname = "Get started"
      
      />
    </>
  )
}

export default Home
