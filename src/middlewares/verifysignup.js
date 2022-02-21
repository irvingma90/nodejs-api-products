import Role, {ROLES} from "../models/role"
import User from "../models/user"

export const checkDuplicateUserOrEmail = async(req, res, next) =>{
    const user = await User.findOne({username: req.body.username})

    if (user) return res.status(400).json({message: "The username already exists"})

    const email = await User.findOne({email: req.body.email})
    if (email) return res.status(400).json({message: "The email already exists"})

    next();
}

export const checkRolesExisted = async(req,res,next) => {
    const roles = await Role.find();
    for(let i=0; i<req.body.roles.length; i++){ 
        for (let j=0; j<roles.length; j++){
            if(req.body.roles[i] === roles[j].name){
                next();
                return;
            }
        }
        return res.status(400).json({
            message: `Role ${req.body.roles[i]} does not exist`
            })
    }
}
