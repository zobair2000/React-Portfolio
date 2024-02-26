import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiSkills } from "react-icons/gi";
import { MdHomeRepairService } from "react-icons/md";
import { SiGooglemessages } from "react-icons/si";
import './nav.css';


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? 'active' :'' }><FaHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')}  className={activeNav === '#about' ? 'active' :'' }><FcAbout /></a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiSkills /></a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav === '#services' ? 'active' :'' }><MdHomeRepairService /></a>
      <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' :'' }><SiGooglemessages /></a>
    </nav>
  )
}

export default Nav