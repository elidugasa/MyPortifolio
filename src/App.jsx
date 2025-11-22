import { useState } from 'react'
import Navbar from "./Component/Navbar.jsx"
import Hero from './Component/Home.jsx'
import About from './Component/About.jsx'
import Projects from './Component/Projects.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'
import MySkill from './Component/MySkill.jsx'


import './App.css'

function App() {
 

  return (
  <div>
   <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <MySkill/>
    <Contact/>
    
    <Footer/>
    

  </div>
  )
}

export default App
