import {Admin} from "../models/adminModel.js"
import jwt from 'jsonwebtoken'
export const authenticate=async (req,res,next)=>{
    try{
       const token=req.headers.authorization;
       console.log(token)
       if(!token){
        return res.status(400).json({
            success:false,
            msg:"Login to Access resource"
        })
       };
       const decode=jwt.verify(token,process.env.TOKEN_SECRET)
       const admin=await Admin.findById(decode._id);
       req.admin=admin
       next()
    }catch(error){
        return res.status(400).json({
            success:false,
            msg:error.message
        })
    }
}