import React from 'react'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import './portfolio.css'


const data = [
  {
    id:1,
    Image:IMG1,
    title:'Ecommerce Website',
    github:"https://github.com",
    demo:'https://dribbble.com/shots/23519799-Ecommerce-elements'
  },
  {
    id:2,
    Image:IMG2,
    title:'Crypto App',
    github:"https://github.com",
    demo:'https://dribbble.com/shots/22287664-Crypto-app'
  },
  {
    id:3,
    Image:IMG3,
    title:'Food Delivery Website',
    github:"https://github.com",
    demo:'https://dribbble.com/shots/22037457-Food-Delivery-Website-Landing-Page'
  },
  {
    id:4,
    Image:IMG4,
    title:'Car Rental Website ',
    github:"https://github.com",
    demo:'https://dribbble.com/shots/23592531-EuroElite-premium-car-rental-website-design'
  },
  {
    id:5,
    Image:IMG5,
    title:' Construction Ecosystem ',
    github:"https://github.com",
    demo:'https://dribbble.com/shots/23627379-Isometric-construction-ecosystem-design'
  },
  {
    id:6,
    Image:IMG6,
    title:'Sports Pharmacy',
    github:"https://github.com",
    demo:'https://dribbble.com/shots/23520855-Sports-Pharmacy'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio__container'>
        {
          data.map(({id, Image, title, github, demo })=>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item_image">
                  <img src={Image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='__blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a>
                  </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio