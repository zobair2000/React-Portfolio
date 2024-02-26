import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.upwork.com/freelancers/~01ee3d3d078613b4b3" target='_blank'><SiUpwork /></a>
      <a href="https://www.linkedin.com/in/abdullah-al-zobair-66577b265/" target='_blank'><FaLinkedin /></a>
      <a href="https://www.instagram.com/abdullah_al_zobair/" target='_blank'><FaInstagram /></a>
      <a href="https://github.com/zobair2000" target='_blank'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials