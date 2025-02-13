import express from 'express'
import dotenv from 'dotenv'
import { User } from './models/user.model'
import { connectDB } from '../../../Day 141/Classwork/backend/db/connectDB'
import User from './models/user.model.js'

dotenv.config()
const app = express()
app.use(cors())

const PORT = process.env.PORT || 4000

app.get('/api/user', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ users })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server is running on ${PORT}`)
})