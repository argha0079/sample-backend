import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";

dotenv.config({
    path: "./env"
})

connectDB()

// Bad practice
// (async function () {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error;
//     }
// })()