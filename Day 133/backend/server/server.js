import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
const PORT = 3000;
const app = express();
app.use(cors({ origin: 'http://localhost:5173' }))

const user = {
    id: 1,
    name: 'John Week',
    email: 'example@mail.com'
};

app.get('/api/user', (req, res) => {
    try {
        res.status(200).json( user );
    } catch (error) {
        res.status(500).json({ error: error })
    }
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
});