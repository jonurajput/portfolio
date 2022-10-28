import React from 'react'
import { AiOutlinePlus ,AiFillMessage,AiFillHome} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import "./AdminPage.css"
const AdminPage = () => {
    const navigate=useNavigate()
    
  return (
    <div className='admin_'>
    <div className='admin_1'><AiFillHome className='home_icon' onClick={()=>navigate("/")}/>
      <h3>Admin page</h3></div>
      <div className='extra' onClick={()=>navigate('/addProject')}>
          <h3>Add Project</h3>
          <AiOutlinePlus style={{fontSize:"2rem",marginLeft:"8px"}}/>
        </div>
        <div className='extra' onClick={()=>navigate('/message')}>
          <h3>Message</h3>
          <AiFillMessage style={{fontSize:"2rem",marginLeft:"8px"}}/>
        </div>
    </div>
  )
}

export default AdminPage
