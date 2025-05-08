import mongoose from 'mongoose';

const fruitLoginSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }
})

const FruitLogin = mongoose.model('FruitLogin', fruitLoginSchema);

export default FruitLogin;