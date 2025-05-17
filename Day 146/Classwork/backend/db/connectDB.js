import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB is crawling into nutty patty cave in ${conn.connection.host}`)
    } catch (error) {
        console.log(`MongoDB has failed to crawl: ${error.message}`)
    }
}