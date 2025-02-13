import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const conn  = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB is crawling into natty patty cave in: ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error ${error.message}`)
    }
}