import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact_container">
          <div className="contact_options">
            <article className='contact_option'>
              <MdOutlineEmail className='contact-icon' />
              <h4>Email</h4>
              <h5>brajeshkumarshiv@gmail.com</h5>
              <a href="mailto:brajeshkumarshiv@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
            </article>

            <article className='contact_option'>
              <FaInstagram className='contact-icon' />
              <h4>Email</h4>
              <h5>brajeshkumarshiv@gmail.com</h5>
              <a href="https://www.instagram.com/brajesh_20_11/" target='_blank' rel="noreferrer">Send a message</a>
            </article>

          </div>

          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="text" name='email' placeholder='Your Email' required />
            <textarea name="message" rows={6} placeholder='Your Message' required ></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact
