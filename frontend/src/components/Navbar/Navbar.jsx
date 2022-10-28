import React from 'react'
import "./Navbar.css" 
import { AiFillGithub, AiOutlineClose } from 'react-icons/ai'
import { ImDownload, ImLocation } from 'react-icons/im'
import { FaLinkedin } from 'react-icons/fa'
import { IoMdCall } from 'react-icons/io'
import { MdSpaceDashboard,MdOutlineEmail } from 'react-icons/md'
import {useNavigate} from "react-router-dom"
const Navbar = () => {
  const navigate=useNavigate();
  const show = () => {
    document.querySelector(".sidebar").style.transform = "scaleX(1)"
  }
  const close = () => {
    document.querySelector(".sidebar").style.transform = "scaleX(0)"
  }
  return (
    <div className='nav'>
      <div className='nav_first'>
        
        <img src="https://res.cloudinary.com/jonujonu12/image/upload/v1666501071/DSC_0054-01-01-01_1_-removebg-preview_pda3cs.png" alt=""/>
        <p>PORTFOLIO</p>
      </div>
      <div className='nav_second'>
        <span className='email'>satyam18319@gmail.com</span>
        <div className="hamburger" onClick={show}>
          <div className='ham_div1'></div>
          <div className='ham_div2'></div>
          <div className='ham_div3'></div>
        </div>
      </div>
      <div className='sidebar'>
        <div className='sidebar_first'>
          <div><AiOutlineClose onClick={close} className="close_icon"/></div>
          <img src="https://res.cloudinary.com/jonujonu12/image/upload/v1666501071/DSC_0054-01-01-01_1_-removebg-preview_pda3cs.png" alt=""/>
          <h2><span style={{ color: '#ff014f', marginRight: "6px" }}>Satyam</span>Chauhan</h2>
        </div>
        <div className='sidebar_second'><button> <ImDownload />Web Developer</button>
 
        </div>
        <div className='sidebar_third'><a href='https://github.com/jonurajput'><AiFillGithub className='icon3' /></a>
        <a href='http://www.linkedin.com/in/satyam-rajput-58a3081a5' ><FaLinkedin className='icon3' /></a></div>
        <div className='sidebar_four'>
          <p><span style={{marginRight:"5px"}}><ImLocation /></span>Haldaur,Bijnor UttarPradesh India</p>
          <p><span style={{marginRight:"5px"}}><IoMdCall/></span>8218797870</p>
        </div>

        <button className='sidebar_btn' onClick={()=>window.open('mailto:satyam18319@gmail.com')}><MdOutlineEmail/>Email me</button>
        <button className='sidebar_btn' onClick={()=>navigate('/admin')}><MdSpaceDashboard/>Admin</button>
      </div>
    </div>
  )
}

export default Navbar

//#ff014f