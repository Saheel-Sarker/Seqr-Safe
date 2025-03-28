import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import passwordRoutes from './routes/password.route.js';
import authRoutes from './routes/auth.route.js';
import stripeRoutes from './routes/stripe.route.js';
import next from 'next';

const app = express();
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();
const backend_port = process.env.BACKEND_PORT || 3000;

app.use(cookieParser()); 
app.use("/api/passwords", express.json(), passwordRoutes);
app.use("/api/auth", express.json(), authRoutes);
app.use("/api/webhook", express.raw({ type: "application/json" }), stripeRoutes);

nextApp.prepare().then(() => {
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(backend_port, () => {
    connectDB();
    console.log(`Server running on port ${backend_port}`);
  });
});

export default app;
