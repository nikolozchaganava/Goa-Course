import mongoose from "mongoose";
export default connectDB = async () => {
  try {
    const conn = await mongoose.connection(process.env.MONGODB_URI);
    console.log(`MongoDB is chilling at ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error at connecting DB`, error.message)
  }
};
