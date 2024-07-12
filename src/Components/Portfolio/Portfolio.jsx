import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/personal.png'
import img2 from '../../assets/house.jpg'
import img3 from '../../assets/dog.jpg'
// import img4 from '../../assets/portfolio4.jpg'
// import img5 from '../../assets/portfolio5.png'
// import img6 from '../../assets/portfolio6.jpg'


const data=[
  {
      "id": 1,
      "image" : img1,
      "title" : "Portfolio",
      "github" :"https://github.com/brajesh20/Portfolio"
  },
  {
      "id": 2,
      "image" : img2,
      "title" : "NITW Guest House",
      "github" :"https://github.com/brajesh20/NITW-GUEST-HOUSE"
  },
  {
      "id": 3,
      "image" : img3,
      "title" : "Dog Care",
      "github" :"https://github.com/brajesh20/tindog_web"
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
                  <img height={236} src={post.image} alt="project 1" />
                </div>
                <h3 style={{textAlign: 'center'}}>{post.title}</h3>
                <div style={{display:'flex', justifyContent:'center', gap:'30px'}} className="portfolio_item-cta">
                  <a href={post.github} className='btn' target='_blank' rel="noreferrer">Github</a>                
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
