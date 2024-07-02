import React from 'react'
import './About.css'
import pic from '../../assets/me-about.jpg'
import { FaAward } from 'react-icons/fa'
import {MdDeveloperMode} from 'react-icons/md'
import {SiCodersrank} from 'react-icons/si'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={pic} alt="about_me_pic" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Coding</h5>
              <small>600+ Questions</small>
            </article>

            <article className='about_card'>
              <MdDeveloperMode className='about_icon'/>
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>

            <article className='about_card'>
              <SiCodersrank className='about_icon'/>
              <h5>Contest</h5>
              <small>15+ Contests</small>
            </article>

          </div>
          <p>Hello, I'm Brajesh Kumar, currently studying my third semester of MCA at NITW. I'm deeply passionate about programming and adept at tackling complex challenges with ease. As a self-taught developer, I've built a strong foundation in data structures and algorithms. My experience includes developing web applications using React, Node.js, and Express.js.</p>
          <a href="#contact" className='button btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
