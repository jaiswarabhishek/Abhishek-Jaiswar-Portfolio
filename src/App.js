
import React from 'react'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Footer from './components/Footer'
import './App.css'


// background-image: linear-gradient(90deg,#dbdbde30 1px,transparent 0),linear-gradient(180deg,#dbdbde30 1px,transparent 0);
function App() {
  
  return (
    <div className= 'scroll-smooth scroll-pt-12 app ' >
   <Navbar />
   <AboutMe />
   <Skills />
   <Projects />
   {/* <Certifications /> */}
   <Footer />
    </div>
  )
}

export default App

