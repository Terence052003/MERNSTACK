import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";
import fruitRoute from "./routes/fruit.route.js";
import path from "path";
dotenv.config();

const app = express();
const PORT = process.env.PORT  || 3000;

const __dirname = path.resolve();

//middleware (accept json data)
app.use(express.json());

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on:' + PORT );
});

app.use('/api/fruit', fruitRoute)
//
// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static(path.join(__dirname, '/Frontend/MernFront/dist')));
//     app.get("*", (req, res) =>{
//         res.sendFile(path.resolve(__dirname, 'Frontend', 'MernFront', 'dist', 'index.html'));
//     })
// }

app.get('/', (req, res) => {
    res.send('Hello World');
});

// console.log(process.env.MONGO_URI);

// 62VbcCzm2nQ9V5gC