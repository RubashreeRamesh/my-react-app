import React from 'react'
import '../styles/Home.css'
import Hero from '../components/Hero'
import About from '../components/About'
import HomeSearch from '../components/HomeSearch'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <HomeSearch />
      <Footer/>
    </div>
  )
}

export default Home