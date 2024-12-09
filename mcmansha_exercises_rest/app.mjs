import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import mongoose from 'mongoose';
import exerciseController from './exercises_controller.mjs';

const PORT = process.env.PORT;
const MONGODB_CONNECT_STRING = process.env.MONGODB_CONNECT_STRING;

const app = express();
app.use(cors({origin: 'http://localhost:5173'}));
app.use(express.json());
app.use(exerciseController);

app.listen(PORT, async () => {
    try {
        await mongoose.connect(MONGODB_CONNECT_STRING);
        console.log('Successfully connected to MongoDB');
        console.log(`Server listening on http://localhost:${PORT}...`);
    } catch (error) {
        console.error('Failed to connect to MongoDB:', error);
        process.exit(1);
    }
});
