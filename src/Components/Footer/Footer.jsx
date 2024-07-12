import React from 'react'
import './Footer.css'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className='footer_logo' >BRAJESH</a>

        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer_socials">
        <a href="https://www.instagram.com/brajesh_20_11/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://github.com/brajesh20" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        </div>

        <div className="footer_copyright">
          <small>&copy; 2024 Made with ❤️ By Brajesh</small>
        </div>
      </footer>
    </div>
  )
}

export default Footer
