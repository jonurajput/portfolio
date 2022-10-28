import {Admin} from "../models/adminModel.js"
import jwt from 'jsonwebtoken'

export const login=async (req,res)=>{
    
  try{
 
  const {email,password}=req.body;
    const result=await Admin.findOne({email,password});
    if(!result){
        return res.status(400).json({error:'Invalid email or password'})
    }
    const token=jwt.sign({_id:result._id},process.env.TOKEN_SECRET)
    res.status(200).cookie('token',token,{
        expires:new Date(Date.now()+600000),
        httpOnly:true
    }).json({msg:"Loggged in successfully",token})
    
  }catch(error){
    console.log(error)
  }
}

