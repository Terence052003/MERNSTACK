import mongoose from 'mongoose';

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true,
    },
    taste:{
        type:String,
        required:true,
    },
    isHealthy:{
        type:String,
        required:true,
    }
},
    {
        timestamps: true
    }
);

const Fruit = mongoose.model('Fruit', fruitSchema);

export default Fruit;