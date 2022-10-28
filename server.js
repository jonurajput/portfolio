import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import {connectDatabase} from "./config/database.js"
import cloudinary from 'cloudinary'
import path from "path"
dotenv.config({path:"./config/config.env"})
const app=express();


connectDatabase();
cloudinary.v2.config({
  cloud_name:process.env.CLOUD_NAME,
  api_key:process.env.API_KEY,
  api_secret:process.env.API_SECRET
})
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true,limit:"50mb"}));
app.use(cookieParser());
 import {adminRouter} from "./routes/user.js"
 import {projectRoute} from './routes/project.js'
 app.use("/api/v1",adminRouter);
  app.use("/api/v2",projectRoute);

  const __dirname1=path.resolve()
if(process.env.NODE_ENV=="production"){
  app.use(express.static(path.join(__dirname1,"frontend","/build")));
  app.get('*',(req,res)=>{
     res.sendFile(path.resolve(__dirname1,"frontend",'build','index.html'));
  })
}else{
  app.get("/",(req,res)=>{
    res.send("api running successfully")
  })
}
app.listen(process.env.PORT,()=>{
    console.log('server is running',process.env.PORT)
   })