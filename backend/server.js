import express from "express";
import cors from "cors";
import connectDB from "./db";
import authRoute from './routes/auth';
import userRoute from './routes/userRoute';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// Connect to the database
connectDB();

// Routes
app.use('/api/auth', authRoute);
app.use('/api/user', userRoute);