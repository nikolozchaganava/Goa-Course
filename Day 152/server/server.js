import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { apiRoutes } from './routes/api.routes.js'
// import { hostname } from 'os'

dotenv.config()
const PORT = process.env.PORT || 5001
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    try {
        res.status(200).json({'message': 'Server is running!'})
    } catch (error) {
        res.status(500).json({'message': "Server is not running!"})
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`)
})