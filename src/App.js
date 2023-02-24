import React from 'react'
import './App.scss'
import { About, Header, Footer, Work, Skills } from './container'
import { Navbar } from './components' 


const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  )
}

export default App

