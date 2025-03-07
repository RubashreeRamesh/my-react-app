import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
  return (
    <div className='hero-container' id='hero'>
      
      <div className="hero-text">
        <span>
          <div className="hero-line" />
          <h5>Workout</h5>
        </span>
        <h2>Push <b>yourself</b> because 
        no one else is going to do it <b>for you.</b></h2><br />
        <a href="#search"><button>Workout more</button></a>
      </div>
    </div>
  )
}

export default Hero