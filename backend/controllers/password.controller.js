import mongoose from "mongoose";
import Password from "../models/passwords.model.js";

export async function getPasswords(req, res){
    try {
        const passwords = await Password.find({});
        console.log("Passwords fetched:", passwords);
        res.status(200).json({success:true, data: passwords});
    } catch (error) {
        console.log("error in fetching products:", error.message);
        res.status(500).json({success:false, message: "Server Error"});
    }
}

export async function createPassword(req, res){
    const password = req.body;
    if(!password.url || !password.username || !password.password){
        return res.status(400).json({success: false, message: "Please provide all fields"});
    }
    const newPassword = new Password(password)
    try {
        await newPassword.save();
        res.status(201).json({success: true, data: newPassword});
    } catch {
        res.status(500).json({success: false, message: "Server Error"});
    }
}

export async function updatePassword(req, res){
    const {id} = req.params;
    const password = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Password ID"});
    }

    try {
        const updatedPassword = await Password.findByIdAndUpdate(id, password, {new: true});
        res.status(200).json({success: true, data: updatedPassword});
    } catch {
        res.status(500).json({success: false, data: "Server Error"});
    }
}

export async function deletePassword(req, res){
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success: false, message: "Invalid Password ID"});
    }
    
    try {
        await Password.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product Deleted"});
    } catch (error) {
        console.error("Error in Deleting Password:", error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
}