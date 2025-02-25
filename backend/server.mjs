import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/connectDB.js'
import passwordRoutes from './routes/password.route.js'

dotenv.config();

const app = express();

app.use(express.json()); // to  accept json data in the req.body

app.use("/api/passwords", passwordRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server started at localHost:${PORT}`);
});

