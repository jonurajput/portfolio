import React, { useState } from 'react'
import toast from "react-hot-toast"
import {AiFillHome} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import "./AddProject.css"
const AddProject = () => {
  const navigate=useNavigate()
  const [name, setName] = useState();
  const [github, setgithub] = useState();
  const [url, seturl] = useState();
  const [techStack, settechStack] = useState();
  const [description, setDescription] = useState();
  const [image1, setImage] = useState();
  const [img, setImg] = useState();
  const [load, setLoad] = useState(false)


  const add = async () => {
    try {
      setLoad(true)
      const res = await fetch("/api/v2/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token")
        },
        body: JSON.stringify({ name, url, github, techStack, image: img, description })
      });
      const res2 = await res.json();
      if (res2.msg) {
        toast.success(res2.msg)
        setLoad(false)
        setDescription('')
        setImg("")
        setImage("")
        setName('')
        setgithub("")
        seturl("")
        settechStack('')
      }
      if (res2.error) {
        toast.error(res2.error)
        setLoad(false)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const handleimage = (e) => {
    const file = e.target.files[0]
    setImage(file)

    const Reader = new FileReader();
    Reader.readAsDataURL(file);
    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setImg(Reader.result)

      }
    }
  }

  return (
    <div className='contactpage'>
<div className='admin_1' style={{color:"#ff014f"}}><AiFillHome className='home_icon' onClick={()=>navigate("/")}/>
      <h3 onClick={()=>navigate('/admin')}>Admin page</h3></div>
      <h3 className="contact_head">Add new project</h3>
      <div className='contact'>
        <label>PROJECT NAME</label>
        <input className="input" type="text" value={name} onChange={e => setName(e.target.value)} />
        <label>GITHUB LINK</label>
        <input className="input" type="text" value={github} onChange={e => setgithub(e.target.value)} />
        <label>PROJECT URL</label>
        <input className="input" type="text" value={url} onChange={e => seturl(e.target.value)} />
        <label>TECH STACK USED</label>
        <input className="input" type="text" value={techStack} onChange={e => settechStack(e.target.value)} />
        <label>PROJECT DESCRIPTION</label>
        <textarea className="input teaxtarea" type="text" value={description} onChange={e => setDescription(e.target.value)} />
        <label>PROJECT IMAGE</label>
        <input className="input" type="file" accept="image/*" onChange={(e) => handleimage(e)} />
        {image1 ? <img src={image1 ? URL.createObjectURL(image1) : ""} alt="" style={{ height: "70px", width: "70px" }} /> : ""}

        <button disabled={load} onClick={add}>{load ? "Uploading ......" : "ADD PROJECT"}</button>
      </div>
    </div>
  )
}

export default AddProject
