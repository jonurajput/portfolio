import React, { useEffect, useState } from 'react'
import './Project.css'
import { AiFillGithub, AiOutlinePlus, AiOutlineClose } from 'react-icons/ai'
import { MdOutlineVisibility } from 'react-icons/md'
import { useNavigate } from "react-router-dom"


const Project = () => {
  const navigate = useNavigate();
  const [project, setProject] = useState();
  const [open, setOpen] = useState(false)
  const [data, setData] = useState()
  const getProject = async () => {
    try {
      const res = await fetch("/api/v2");
      const res2 = await res.json();
      setProject(res2.result)


    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getProject()
  }, [project])


  return (
    <div className='project'>
      <h2 className='mywork'>Project</h2>
      
      <div className='projects' data-aos="zoom-out-down" data-aos-duration="2000">
        {
          project?.map((i) => {
            return (
              <div className='card' key={i._id} onClick={() => {
                setOpen(true)
                setData(i)
              }}>
                <img src={i?.image} alt='' />
                <p>{i.name}</p>
                <p>TechStack :{i.techStack}</p>
                <div>
                  <a href={i.url}><button><MdOutlineVisibility />Demo</button></a>
                  <a href={i.github}><button><AiFillGithub />Github</button></a>
                </div>
              </div>
            )
          })
        }



        <div className='card_add' onClick={() => navigate('/addProject')}>
          <h2>Add Project</h2>
          <AiOutlinePlus />
        </div>
      </div>
    </div>
  )
}

export default Project

