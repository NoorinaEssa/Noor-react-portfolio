import React from 'react'
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg'

function About() {
  return (
    <div id='about' className='about'>
    <div className="about-title">
    <h1>About Me</h1>
    <img src={theme_pattern} alt=''/>
     </div>
     <div className="about-sections">
     <div className="about-left">
     <img src="../src/assets/about.jpg.png" alt="" />
     
     </div>
     <div className="about-right">
     <div className="about-para">
     <p>
     As a MERN stack developer, I excel in harnessing the power of these technologies 
     to build robust back-end and front-end systems.
      In my journey, I've collaborated closely with multidiscipl inary teams,
      translating intricate concepts into functional,user-centric solutions.!
     </p>
     </div>

     <div className="about-skills">
     <div className="about-skill"><p>Html and Css</p><hr style={{width:"50%"}} /></div>
     <div className="about-skill"><p>Reactjs</p><hr style={{width:"70%"}} /></div>
     <div className="about-skill"><p>MongoDb</p><hr style={{width:"90%"}} /></div>
     <div className="about-skill"><p>Nodejs</p><hr style={{width:"70%"}} /></div>
     
     
     </div>
     </div>
     </div>

     <div className="about-acheivements">
     <div className="about-acheivement">
     <h1>2+</h1>
     <p>YEARS OF EXPERIENCE</p>
     </div>
     <hr />
     <div className="about-acheivement">
     <h1>2+</h1>
     <p>PROJECTS COMPLETED</p>
     </div>
     <hr />
     <div className="about-acheivement">
     <h1>3+</h1>
     <p>HAPPY CLIENTS</p>
     </div>
     <hr />
     </div>
    </div>
  )
}

export default About