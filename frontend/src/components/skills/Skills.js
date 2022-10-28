import React from 'react'
import './Skills.css'
import { ImHtmlFive } from 'react-icons/im'
import { IoLogoCss3 } from 'react-icons/io'
import { IoLogoJavascript } from 'react-icons/io'
import { SiVisualstudiocode, SiNextdotjs, SiMongodb,SiRedux } from 'react-icons/si'
import { FaReact, FaNodeJs } from 'react-icons/fa'


const Skills = () => {
  return (
    <div className='skill_'>
      <h2 className='contact_head'>Skills</h2>
      <div className="skill" data-aos="fade-up" data-aos-duration="2000">
        <div className='skill_inner_div' data-aos="fade-left" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "tomato" }} ><ImHtmlFive className="icon1" /> Html</div>
          <div className='skill_second'><div style={{ width: '80%', backgroundColor: "tomato" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-right" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "blue" }} ><IoLogoCss3 className="icon1" /> Css</div>
          <div className='skill_second'><div style={{ width: '80%', backgroundColor: "blue" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-left" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "yellow" }} ><IoLogoJavascript className="icon1" /> Javascript</div>
          <div className='skill_second'><div style={{ width: '80%', backgroundColor: "yellow" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-right" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "cyan" }} ><FaReact className="icon1" /> React Js</div>
          <div className='skill_second'><div style={{ width: '70%', backgroundColor: "cyan" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-right" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "purple" }} ><SiRedux className="icon1" /> Redux</div>
          <div className='skill_second'><div style={{ width: '70%', backgroundColor: "purple" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-left" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "#3e9423" }} ><FaNodeJs className="icon1" /> Node Js</div>
          <div className='skill_second'><div style={{ width: '59%', backgroundColor: "#3e9423" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-right" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "black" }} ><SiNextdotjs className="icon1" />Next Js</div>
          <div className='skill_second'><div style={{ width: '55%', backgroundColor: "black" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-left" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "green" }} ><SiMongodb className="icon1" /> Mongo Db</div>
          <div className='skill_second'><div style={{ width: '50%', backgroundColor: "green" }}></div></div>
        </div>
        <div className='skill_inner_div' data-aos="fade-right" data-aos-duration="1000">
          <div className='skill_first' style={{ color: "#0a5c98" }} ><SiVisualstudiocode className="icon1" /> Vs code</div>
          <div className='skill_second'><div style={{ width: '65%', backgroundColor: "#0a5c98" }}></div></div>
        </div>

      </div>
    </div>
  )
}

export default Skills
