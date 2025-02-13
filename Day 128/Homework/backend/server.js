import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from '../../../Day 141/Classwork/backend/db/connectDB'

dotenv.config()
const app = express()
app.use(cors())

const PORT = process.env.PORT || 4000

app.get('/api/user', async (req, res) => {
    try {
        res.status(200).json({})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on ${PORT}`)
})