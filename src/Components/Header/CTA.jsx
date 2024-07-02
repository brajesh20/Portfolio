import React from 'react'
import resume from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div>
      <div className="cta">
        <a href={resume} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>
  )
}

export default CTA
