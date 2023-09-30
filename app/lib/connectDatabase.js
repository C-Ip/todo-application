// Checks for a connection to the database defined in the MONGO_URI

import mongoose from 'mongoose';

mongoose.set("strict", true);

const LOCAL_URI = process.env.LOCAL_URI;

export default async function connectMongoDB() {
    try {
        await mongoose.connect(LOCAL_URI);
        console.log("Connected");
    } catch (e) {
        console.log(e);
    }
}