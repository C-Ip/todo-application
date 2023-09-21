import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", false);
    if(isConnected) {
        console.log("DB connected successfully");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "todo_listDB",
        });
        isConnected = true;
    } catch (e) {
        console.log(e);
    }
}