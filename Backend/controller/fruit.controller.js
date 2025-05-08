import Fruit from "../models/fruits.model.js";
import FruitLogin from "../models/fruit.login.js";
import mongoose from "mongoose";

export const getFruit = async (req, res) => {
    try {
        const fruits = await Fruit.find({});
        res.status(200).json({success: true, data: fruits});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: error.message});
    }
};

export const loginAccount = async (req, res) => {
    const fruitLogin = new FruitLogin(req.body);
    try {
        const savedFruitLogin = await fruitLogin.save();
        res.status(200).json({success: true, data: savedFruitLogin});
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, error: error.message});
    }
}

export const createFruit = async (req, res) => {
    const fruit = req.body;
    if(!fruit.name || !fruit.color || !fruit.taste || !fruit.isHealthy){
        return res.status(400).json({msg: 'Please provide all the required fields'});
    }
    const newFruits = new Fruit(fruit);
    try{
        await newFruits.save();
        res.status(200).json({success: true, data: newFruits})
    } catch(error){
        console.error("Error in creating fruit:", error.message)
        res.status(500).json({success: false, error: error.message})
    }
}

export const updateFruit = async (req, res) => {
    const { id } = req.params;
    const fruit = req.body;

    if(mongoose.Types.ObjectId.isValid(id) === false){
        return res.status(404).json({msg: 'Fruit not found'});
    }
    try {
        const updateFruit = await Fruit.findByIdAndUpdate(id, fruit, { new: true });
        res.status(200).json({success: true, msg: 'Fruit updated successfully'})
    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, error: error.message})
    }
}

export const deleteFruit = async (req, res) => {
    const { id } = req.params;
    try {
        await Fruit.findByIdAndDelete(id);
        res.status(200).json({success: true, msg: 'Fruit deleted successfully'})
    } catch (error) {

    }
}