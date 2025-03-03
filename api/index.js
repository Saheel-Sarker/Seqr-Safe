import express from 'express';
import cookieParser from 'cookie-parser';
import connectDB from './config/connectDB.js';
import passwordRoutes from './routes/password.route.js';
import authRoutes from './routes/auth.route.js';
import stripeRoutes from './routes/stripe.route.js';
import path from 'path';
import next from 'next';

const __dirname = path.resolve();

const app = express();
const nextApp = next({ dev: false });
const backend_port = process.env.BACKEND_PORT;

app.use(cookieParser()); 

app.use("/api/passwords", express.json(), passwordRoutes);
app.use("/api/auth", express.json(), authRoutes);
app.use("/api/webhook", express.raw({ type: "application/json" }), stripeRoutes);

if (process.env.MODE_ENV === "production"){
  console.log("starting up frontend service");
  app.use(express.static(path.join(__dirname, '.next')));
  app.all('*', async (req, res) => {
    await nextApp.prepare();
    return nextApp.getRequestHandler()(req, res);
  });
  nextApp.prepare().then(() => {
    app.listen(backend_port, () => {
      connectDB();
      console.log(`Everything is serving at ${backend_port}`);
    });
  });
}
else{ 
  app.listen(backend_port, () => {
    connectDB();
    console.log(`Server started at http://localhost:${backend_port}`);
  });
}

export default app;