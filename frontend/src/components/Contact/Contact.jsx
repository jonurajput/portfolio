import React,{useState} from 'react'
import {toast} from 'react-hot-toast'
import './Contact.css'
const Contact = () => {
  const [name,setName]=useState();
  const [email,setEmail]=useState();
  const [subject,setSubject]=useState();
  const [message,setMessage]=useState();
  const [load,setLoad]=useState(false)
  const sendMessage=async ()=>{
    setLoad(true)
     try{
       const res= await fetch("/api/v2/message",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({name,email,subject,message})
        });
        const res2=await res.json();
        if(res2.error){
          toast.error(res2.error);
          setLoad(false)
        }
        if(res2.msg){
          toast.success(res2.msg);
          setLoad(false)
          setEmail();
          setName();
          setMessage();
          setSubject();
        }
        
     }catch(err){
      toast.error(err.message)
      setLoad(false)
     }
  }
  return (
    <div className='contactpage'>
    
  <h3 className="contact_head">Contact Me</h3>
    <div className='contact' data-aos="fade-up" data-aos-duration="1000">
      <label>YOUR NAME</label>
      <input className="input" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
     
      <label>EMAIL</label>
      <input className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <label>SUBJECT</label>
      <input className="input" type="text" value={subject} onChange={(e)=>setSubject(e.target.value)}/>
      <label>Message</label>
      <textarea className="input teaxtarea" type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
      <button disabled={load} onClick={sendMessage}>{load?"Sending.....":"SEND MESSAGE"}</button>
    </div>
    </div>
  )
}

export default Contact
