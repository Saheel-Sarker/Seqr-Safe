import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import passwordRoutes from './routes/password.route.js';
import authRoutes from './routes/auth.route.js';
import stripeRoutes from './routes/stripe.route.js';
import path from 'path';
import cors from 'cors';

const __dirname = path.resolve();

// dotenv.config();

const app = express();
const backend_port = process.env.BACKEND_PORT;
const frontend_port = process.env.FRONTEND_PORT; 
console.log('frontend is', `http://localhost:${frontend_port}`);
const allowedOrigins = [
  `http://localhost:${frontend_port}`, // For local development
  process.env.FRONTEND_VERCEL_URL,// Your Render frontend URL
  process.env.FRONTEND_RENDER_URL
];

app.use(cookieParser()); // allows us to parse incoming cookies
app.use(cors({
  origin: allowedOrigins, // Replace with your actual frontend URL
  credentials: true
}));

// Routes
app.use("/api/passwords", express.json(), passwordRoutes);
app.use("/api/auth", express.json(), authRoutes);
app.use("/api/webhook", express.raw({ type: "application/json" }), stripeRoutes);
 
app.listen(backend_port, () => {
  connectDB();
  console.log(`Server started at http://localhost:${backend_port}`);
});

export default app;