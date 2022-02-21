import User from "../models/user";

export const createUser = (req,res) => {
    res.json('creating user');
}

export const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.log(error)
    }
}

export const getUserById = async(req,res) => {
    try {
        const user = await User.findById(req.params.userId)
        res.status(200).json(user);
    } catch (error) {
        console.log(error)
    }
}

export const updateUser = async(req,res) => {
    res.json("update user");
}

export const deleteUser = async(req,res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        res.status(204).json(deletedUser);
    } catch (error) {
        console.log(error)
    }
}