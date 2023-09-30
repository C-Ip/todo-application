import { NextResponse } from "next/server";
import connectMongoDB from "../../lib/connectDatabase";
import Task from "../../model/Task";

export async function GET(req) {
    await connectMongoDB();
    return NextResponse.json(await Task.find({}));
}

export async function POST(req) {
    const {description, completed} = await req;
    await connectMongoDB();
    
    await Task.create({description, completed});
    return NextResponse.json({message: "Task Created"}, {status: 201});
}

export async function DELETE(req) {
    await connectMongoDB();
    await Task.deleteOne();

    return NextResponse.json({message: "Task has been deleted."}, {status: 201});
}