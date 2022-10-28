import Arrow from './Arrow/Arrow';
import Contact from './Contact/Contact';
import Navbar from './Navbar/Navbar';
import Section2 from './Section2/Section2';
import {useEffect, useState} from 'react'
import Project from './Project/Project';
import Skills from './skills/Skills';
import Footer from './Footer/Footer';
import Education from './Education/Education';
function Home() {
  const [show,setShow]=useState(false)
  
useEffect(()=>{
    window.addEventListener("scroll",()=>{
      const winScroll=document.body.scrollTop || document.documentElement.scrollTop;
      if(winScroll>200){
        setShow(true)
      }
    })
 } ,[])
  return (
    <div>
    {show?<Arrow/>:""}
       <Navbar/>
        <Section2/> 
        <Education/>
        <Skills/>
       <Project/> 
      <Contact/>
       <Footer/>    
    </div>
  );
}

export default Home;
