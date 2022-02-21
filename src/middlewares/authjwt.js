import jwt from "jsonwebtoken";
import { SECRET } from "../config";
import Role from "../models/role";
import User from "../models/user";

export const verifyToken = async(req, res, next) => {
    try {
        const token = req.headers["x-access-token"];
        console.log(token);

        if (!token) return res.status(403).json({message: "No token provided"});

        const decoded = jwt.verify(token, SECRET);

        req.userId = decoded.id

        next();
    } catch (error) {
        return res.status(401).json({message: "Unauthorized"});
        
    }
};

export const isModerator = async(req,res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i= 0; i< roles.length; i++){
        if(roles[i].name === "moderator"){
            next();
            return;
        }
        
    }
    return res.status(403).json({message: "Moderator role required"});
};

export const isAdmin = async(req,res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i= 0; i< roles.length; i++){
        if(roles[i].name === "admin"){
            next();
            return;
        }
        
    }
    return res.status(403).json({message: "Admnin role required"});
};
