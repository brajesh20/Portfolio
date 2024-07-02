import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
// import img4 from '../../assets/portfolio4.jpg'
// import img5 from '../../assets/portfolio5.png'
// import img6 from '../../assets/portfolio6.jpg'


const data=[
  {
      "id": 1,
      "image" : img1,
      "title" : "",
      "github" :"",
      "demo" : ""
  },
  {
      "id": 2,
      "image" : img2,
      "title" : "",
      "github" :"",
      "demo" : ""
  },
  {
      "id": 3,
      "image" : img3,
      "title" : "",
      "github" :"",
      "demo" : ""
  }
]

const Portfolio = () => {
  return (
    <div>
      <section id='projects'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
          {
            data.map((post)=>(
              <article key={post.id} className='portfolio_item'>
                <div className="portfolio_item-image">
                  <img src={post.image} alt="project 1" />
                </div>
                <h3>{post.title}</h3>
                <div className="portfolio_item-cta">
                  <a href={post.github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={post.demo} className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                </div>
              </article>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Portfolio
