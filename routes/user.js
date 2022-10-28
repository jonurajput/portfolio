import express from "express";
import {login} from "../Contorller/Admin.js"
export const adminRouter=express.Router();

adminRouter.route("/login").post(login);

