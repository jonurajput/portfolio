import React,{useEffect,useState} from 'react'
import './Message.css'
import {AiFillHome} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
const Message = () => {
  const navigate=useNavigate()
  const [Message,setMessage]=useState()
  const getMessage=async ()=>{
    try{
          const res=await fetch("/api/v2/getMessage");
          const res2=await res.json();
          setMessage(res2.result)
          
    }catch(err){
      console.log(err.message)
    }
  }

  useEffect(()=>{
     getMessage()
  },[Message])
  return (
    <div className='message__'>
      <div className='admin_1'><AiFillHome className='home_icon' onClick={()=>navigate("/")}/>
      <h3 onClick={()=>navigate('/admin')}>Admin page</h3></div>
      <div className='projects'>
       {
        Message?"":<div className='message_box'>No message</div>
       }
      {
        Message?.map((i)=>{
          return (
            
            <div className='message_box'>
               <p style={{fontSize:"0.8rem"}}><span style={{fontSize:"0.9rem",color:"#f5f5f7"}}>From:</span> {i.name}</p>
               <p style={{fontSize:"0.8rem"}}><span style={{fontSize:"0.8rem",color:"#f5f5f7"}}>Email:</span>{i.email}</p>
               <p style={{fontSize:"0.8rem"}}><span style={{fontSize:"0.8rem",color:"#f5f5f7"}}>Subject:</span>{i.subject}</p>
               <p style={{fontSize:"0.7rem",wordBreak:"break-all"}}><span style={{fontSize:"0.8rem",color:"#f5f5f7"}}>Message:</span><br/>{i.message}</p>
           </div> 
            
          )
        })
      }
           
 
        </div>  
    </div>
  )
}

export default Message
