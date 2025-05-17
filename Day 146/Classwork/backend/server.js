import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './db/connectDB.js'
import { User } from './models/user.model.js'

dotenv.config()
const app = express()
app.use(cors())

const PORT = process.env.PORT || 4000;

//! Get
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json( users )
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//! Delete
app.post('/api/users', async (req, res) => {
    try {
        const body = req.body
        const user = await User.create(body)
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

//! Update
app.put('/api/users/:id', async (req, res) => {
    try {
      const id = req.params.id
      const body = req.body
  
      await User.findByIdAndUpdate(id, body)
      await User().save
  
      res.status(202).json({message: "update successful"})
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  })

app.listen(PORT, () => {
    connectDB()
    console.log(`Server running on ${PORT}`)
})