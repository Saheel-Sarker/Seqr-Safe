import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import passwordRoutes from './routes/password.route.js';
import authRoutes from './routes/auth.route.js';
import stripeRoutes from './routes/stripe.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for requests from http://localhost:3000
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

// app.use(express.json()); // to accept json data in the req.body
app.use(cookieParser()); // allows us to parse incoming cookies

// Routes
app.use("/api/passwords", express.json(), passwordRoutes);
app.use("/api/auth", express.json(), authRoutes);
app.use("/api/webhook", express.raw({ type: "application/json" }), stripeRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});

