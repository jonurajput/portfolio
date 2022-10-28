import express from "express";
import {getAllProject,addProject} from '../Contorller/Project.js'
import {authenticate} from '../middleware/auth.js'
import {addMessage,getMessage} from "../Contorller/message.js"
export const projectRoute=express.Router();


projectRoute.route("/").get(getAllProject);
projectRoute.route("/add").post(authenticate,addProject);
projectRoute.route("/message").post(addMessage);
projectRoute.route("/getmessage").get(getMessage);