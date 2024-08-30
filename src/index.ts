// src/index.ts

import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db'; // MongoDB configuration
import authRouter from './routes/auth'; // Import auth routes
import cryptoRouter from './routes/crypto'; // Import crypto routes

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

app.use(express.json());

app.use('/api/auth', authRouter); // Use auth routes
app.use('/api/cryptos', cryptoRouter); // Use crypto routes

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
