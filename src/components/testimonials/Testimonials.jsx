import React from 'react'
import { Pagination } from 'swiper/modules'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
import './testimonials.css'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
  {
    avatar: AVTR1,
    name: 'Tiny Show',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente corporis unde accusantium quos soluta deleniti incidunt laboriosam assumenda doloribus eum est similique vero?'
  },
  {
    avatar: AVTR2,
    name: 'Shatta Wale',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente corporis unde accusantium quos soluta deleniti incidunt laboriosam assumenda doloribus eum est similique vero?'
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente corporis unde accusantium quos soluta deleniti incidunt laboriosam assumenda doloribus eum est similique vero?'
  },
  {
    avatar: AVTR4,
    name: 'Nana Ama McBrown',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus sapiente corporis unde accusantium quos soluta deleniti incidunt laboriosam assumenda doloribus eum est similique vero?'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className="client__avatar">
                  <img src={avatar} alt="Avatar One" />
                  </div>
                  <h5 className='client__name'>{name}</h5>
                  <small className='client__review'>{review}
                  </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials