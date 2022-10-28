import React from 'react'
import './Education.css'
import { HiAcademicCap } from 'react-icons/hi' //MdOutlineComputer //AiFillApi //MdCalendarViewDay
import { MdOutlineComputer, MdCalendarViewDay } from 'react-icons/md'
import { AiFillApi } from 'react-icons/ai'
const Education = () => {
    return (
        <div className='project' style={{marginTop:"18px"}} data-aos="fade-right" data-aos-duration="1000">
            
            <div className="edu" data-aos="fade-up" data-aos-duration="2000">
            <h2 style={{ color: "#f5f5f7",width:"100%",textAlign:"start" }}>Education</h2>
                <h3 style={{ color: "#f5f5f7",width:"100%",textAlign:"start",marginTop:"10px" }}><HiAcademicCap />Computer Science Engineering</h3>
                <p style={{ color: "#f5f5f7",width:"100%",textAlign:"start",margin:"8px" }}>PIET, Meerut (2019,2023)</p>
                <p style={{ fontSize: "0.8rem",width:"100%",textAlign:"start"}}>I am currently pursing B.tech in Computer Sciene from PIET Meerut</p>
                <h4 style={{ fontSize: "1.1rem",width:"100%",textAlign:"start" ,margin:"1rem"}}>What i am doing</h4>
                <div className="edu1" >
                    
                    <div className="edu_div" data-aos="fade-right" data-aos-duration="1000">
                       <div className="edu_div_1"> <MdOutlineComputer style={{fontSize:"2rem"}}/>
</div>
                          <div className="edu_div_2">
                            <p >Frontend Development</p>
                            <p>i can build a website frontend using HTML, CSS ,Js,React js and NextJs</p>
                        </div>
                    </div>
                    <div className="edu_div" data-aos="fade-left" data-aos-duration="1500">
                       <div className="edu_div_1"> <AiFillApi style={{fontSize:"2rem"}}/>
</div>
                          <div className="edu_div_2">
                            <p>API Development</p>
                            <p>i can develop Rest Api using NODE JS</p>
                        </div>
                    </div>
                    <div className="edu_div" data-aos="fade-top" data-aos-duration="1000">
                       <div className="edu_div_1"> <MdCalendarViewDay style={{fontSize:"2rem"}}/>
</div>
                          <div className="edu_div_2">
                            <p>Backend Development</p>
                            <p>handle database,server,api using Express,MongoDb</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Education
