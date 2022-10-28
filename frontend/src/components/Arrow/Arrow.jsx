import React,{useEffect,useState} from 'react'
import "./Arrow.css"
import { TfiArrowUp } from 'react-icons/tfi'

const Arrow = () => {
    
    const gotoTop=()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
    const listenToScroll=()=>{
        const winScroll=document.body.scrollTop || document.documentElement.scrollTop;
        if(winScroll >220){
            document.querySelector(".arrow").style.transform="scale(1)"
        }
        else{
            document.querySelector(".arrow").style.transform="scale(0)"
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",listenToScroll)
     } ,[])
  return (
    <div className='arrow' onClick={gotoTop}>

     <TfiArrowUp className='icon'/>
    </div>
  )
}

export default Arrow;
