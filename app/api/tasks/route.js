import { NextResponse } from "next/server";
import connectMongoDB from "../../lib/connectDatabase";
import Task from "../../model/Task";

export async function GET(req) {
    await connectMongoDB();
    return await Task.find({});
}

export async function POST(req) {
    console.log(req);
    const { listName, description, completed } = await req;
    await connectMongoDB();
    
    await Task.create({listName, description, completed});
    return NextResponse.json({message: "Task Created"}, {status: 201});
}

export async function DELETE(req) {
    const { id } = await req;
    await connectMongoDB();
    await Task.deleteOne({_id: id});

    return NextResponse.json({message: "Task has been deleted."}, {status: 201});
}