import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import passwordRoutes from './routes/password.route.js';
import authRoutes from './routes/auth.route.js';
import stripeRoutes from './routes/stripe.route.js';
import path from 'path';

const __dirname = path.resolve();

const app = express();
const backend_port = process.env.BACKEND_PORT;
const frontend_port = process.env.FRONTEND_PORT; 

app.use(cookieParser()); 

app.use("/api/passwords", express.json(), passwordRoutes);
app.use("/api/auth", express.json(), authRoutes);
app.use("/api/webhook", express.raw({ type: "application/json" }), stripeRoutes);
 
app.listen(backend_port, () => {
  connectDB();
  console.log(`Server started at http://localhost:${backend_port}`);
});

export default app;