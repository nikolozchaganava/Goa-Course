import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { connectDB } from './db/connectDB.js';
import { User } from './models/user.model.js';

dotenv.config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;

app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});