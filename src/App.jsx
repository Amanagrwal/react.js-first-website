import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home'
import Service from './Service'
import Contact from './Contact'
import About from './About'
import {  Routes , Route  , Navigate} from 'react-router-dom'
import Navlink from './Navlink'
import Footer from './Footer'

function App() {
  return (
    <>
      <Navlink/>
    <Routes>
    <Route path='/' element ={<Home/>} />
    <Route path='/service' element ={<Service/>} />
    <Route path='/contact' element ={<Contact/>} />
    <Route path='/about' element ={<About/>} />
    <Route path='/*'  element = { <Navigate  to= "/" />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
