import React from 'react'
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Hero() {
  return (
    <div id='home' className='hero'>
    <img src='../src/assets/about.jpg.png' alt=''/>
    
    <h1><span>I'm Noorina Essa,</span> Junior MERN Developer</h1>
    <p> I'm a MERN stack developer driven by a passion for crafting dynamic and engaging websites.</p>
<div className="hero-action">
<div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>
Connect With Me</AnchorLink></div>
<div className="hero-resume">
<a href="../src/assets/job1 CV.pdf" target="_blank" rel="noopener noreferrer">My resume</a>
</div>

</div>

    </div>
  )
}

export default Hero