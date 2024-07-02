import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div>
      <div className="header_socials">
        <a href="https://www.linkedin.com/in/brajesh-kumar-51813315a/" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com/brajesh20" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/brajesh_20_11/" target='_blank' rel="noopener noreferrer"><FaInstagram /></a>
      </div>
    </div>
  )
}

export default HeaderSocial
