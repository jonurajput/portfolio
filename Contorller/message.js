import {Message} from '../models/messageModel.js'
export const addMessage=async (req,res)=>{
    try{
        const {name,email,subject,message}=req.body;
        if(!name || !email || !subject || !message){
            return res.status(400).json({error:"please fill all fields"})
        }
       const result= await new Message({name,email,subject,message}).save();
       if(result){
        return res.status(200).json({msg:"message sent successfully"})
       }
       return res.status(400).json({error:"server error"})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

export const getMessage=async (req,res)=>{
    try{
    const result=await Message.find();
    return res.status(200).json({result})
    }catch(err){
        res.status(400).json({error:err.message})
    }
}