import { NextResponse } from "next/server";
import { connectToDatabase } from "../lib/mongodb";
import mongoose from "mongoose";

export async function GET(req, res) {
    try {
        await connectToDatabase();

        // const todoListSchema = new mongoose.Schema({
        //     _id: String,
        //     title: String
        // });

        // const Task = mongoose.model("Item", todoListSchema);
        
        // Task.find({}), function(err, foundItem) {
        //     return NextResponse.json({foundItem});
        // }
        return NextResponse.json({message: "Success"});
    } catch(e) {
        console.log(e);
    }
}