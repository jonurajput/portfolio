import {Project} from "../models/ProjectModel.js"
import cloudinary from "cloudinary"
export const getAllProject=async (req,res)=>{
    try{
      const result= await Project.find();
      if(!result){
        return res.status(400).json({error:"unable to fetch project"})
      }
      return res.status(202).json({result})
    }catch(error){
       console.log(error.message)
    }
}

export const addProject=async (req,res)=>{
    try{
     const {name,url,github,techStack,image,description}=req.body;
     console.log(name,url,github,techStack,image,description)
 if(!name || !url || !github || !techStack || !image || !description){
    return res.status(400).json({error:"please fill all the fields"})
 }

//  await cloudinary.v2.uploader(image.public_id);
 const mycloud=await cloudinary.v2.uploader.upload(image,{
  folder:"portfolio"
 })
  const result=await new Project({
    name,url,github,techStack,image:mycloud.secure_url,description
  }).save();

  if(!result){
    return res.status(400).json({error:"failed to add project"})
  }
     return res.status(200).json({result,msg:"project added successfully"})
    }catch(error){
        return res.status(400).json({error:"unable to add project"})
    }
}

