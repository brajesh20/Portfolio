import React from 'react'
import './Header.css'
import CTA from './CTA'
import me from '../../assets/profile.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Brajesh Kumar</h1>
          <h5 className="text-light">Web Development Learner</h5>
          <CTA />
          <HeaderSocial />

          <div className="profile">
            <img src={me} alt="profile_pic" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
        </div>
      </header>
    </div>
  )
}

export default Header
