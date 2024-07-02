import React from 'react'
import './Skills.css'
import { BiCheck } from 'react-icons/bi'


const Skills = () => {
  return (
    <div>
      <section id='skills'>
        <h5>What I Offer</h5>
        <h2>Skills</h2>

        <div className='container skills_container'>
          <article className='skills'>
            <div className="skills_head">
              <h3>Languages & Framework</h3>
            </div>

            <ul className='skills_list'>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>HTML</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>CSS</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>JavaScript</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>C++</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Java</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>R</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>SQL</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>PHP</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>ReactJs</p>
              </li>
            </ul>
          </article>
          {/* End of Languages  */}

          <article className='skills'>
            <div className="skills_head">
              <h3>CourseWork</h3>
            </div>

            <ul className='skills_list'>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Data Structures</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Database Management</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Web Development</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Object-Oriented Programming</p>
              </li>
            </ul>
          </article>

          {/* End of CourseWork */}

          <article className='skills'>
            <div className="skills_head">
              <h3>Soft Skills</h3>
            </div>

            <ul className='skills_list'>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Adaptability</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Communication</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Leadership</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Teamwork</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Problem Solving</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Time Management</p>
              </li>
              <li>
                <BiCheck className='skills_list-icon' />
                <p>Creativity</p>
              </li>
            </ul>
          </article>

          {/* End of Soft SKills */}

        </div>
      </section>
    </div>
  )
}

export default Skills
