import React from 'react'
import Common from './Common'
import Web from "../src/image/about 2.webp";

function About() {
  return (
    <div>
     <Common 
          name = " welcome to About page"
          imgsrc={Web}
          visit = "/contact"
          btname = "contact me"
     />
    </div>
  )
}

export default About
