import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import './experience.css';

const Experience = () => {
  return (
<section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>Html</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>javaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>Django</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <div>
              <h4>SQLite</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              </div>
            </article>
            <article className='experience__details'>
              <FaCheckCircle className='experience__details-icon' />
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        </div>
    </section>
  )
}
export default Experience