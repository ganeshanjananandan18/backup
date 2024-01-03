import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connnection = async() => {
    const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@clone-whatsapp.goub4pa.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(URL);
        console.log("Database successfully connnected!")
    } catch (error) {
        console.log('Error while connecting to the database: ', error.message);
    }
}


export default Connnection;