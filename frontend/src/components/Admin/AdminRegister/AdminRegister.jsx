import React,{useState} from 'react'
import {toast} from 'react-hot-toast'
import {useNavigate} from "react-router-dom"
import {AiFillHome} from 'react-icons/ai'
const AdminRegister = () => {
   const navigate=useNavigate();
   const [email,setEmail]=useState();
   const [password,setPassword]=useState();
   const[btnLoad,setLoad]=useState(false)
   
     
   const submit=async ()=>{
    try{
      setLoad(true)
      const res=await fetch("/api/v1/login",{
       method:"POST",
       headers:{
           "Content-Type":"application/json"
       },
       body:JSON.stringify({email,password})
      });
      const res2=await res.json();
     
      if(res2?.error){
       toast.error(res2.error)
       setLoad(false)
      }
      if(res2?.msg){
        navigate("/admin");
       toast.success(res2.msg)
       sessionStorage.setItem("token",res2?.token)
       
       setLoad(false)
       
      }
   }catch(error){
    console.log(error)  
   }
   }
  
  return (
    <div>
     <div className='admin_1' ><AiFillHome className='home_icon' onClick={()=>navigate("/")} style={{color:"#ff014f"}}/>
      <h3 onClick={()=>navigate('/admin')} style={{color:"#ff014f"}}>Admin page</h3></div>
        <div className='contactpage'>
    
    <h3 className="contact_head">Admin Panel</h3>
      <div className='contact'>
        <label>EMAIL</label>
        <input className="input" type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <label>password</label>
        <input className="input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button onClick={submit} disabled={btnLoad}>{btnLoad?"Loading":"Login As Admin"}</button>
      </div>
      </div>
    </div>
  )
}

export default AdminRegister
