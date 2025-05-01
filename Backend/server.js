import express from 'express';
import dotenv from 'dotenv';
import {connectDB} from "./config/db.js";
import fruitRoute from "./routes/fruit.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT  || 3000;

//middleware (accept json data)
app.use(express.json());

app.listen(3000, () => {
    connectDB();
    console.log('Server is running on:' + PORT );
});

app.use('/api/fruit', fruitRoute)

app.get('/', (req, res) => {
    res.send('Hello World');
});

// console.log(process.env.MONGO_URI);

// 62VbcCzm2nQ9V5gC