import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css';


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abdullah Al Zobair</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://www.facebook.com/profile.php?id=100091406573866" target='_blank'><FaFacebook /></a>
        <a href="https://www.instagram.com/abdullah_al_zobair/" target='_blank'><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/abdullah-al-zobair-66577b265/" target='_blank'><FaLinkedin /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Abdullah Al Zobair. All right reserved.</small>
      </div>
    </footer>
  )
}

export default Footer