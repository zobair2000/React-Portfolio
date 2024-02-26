import React from 'react';
import { FaAward } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import MEAbout from '../../assets/me-about.jpg';
import './about.css';


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={MEAbout} alt="About Image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <TbUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>300+ Worldwide</small>
            </article>
            <article className='about__card'>
              <GoProjectRoadmap className='about__icon'/>
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, debitis? 
          Vero ex possimus voluptatum dolorum necessitatibus optio laborum laboriosam
          ducimus!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About