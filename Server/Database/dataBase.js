import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const uri = process.env.MONGO_URI;

const run = async()=>{
try {
    await mongoose.connect(uri)
    console.log(`Connected to Data Base 🔥`)
} catch (error) {
    console.log(`Error connecting to Data base ::> ${error}`)
}
}
run()

export default run;