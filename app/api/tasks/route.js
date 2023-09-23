import { NextResponse } from "next/server";
import connectMongoDB from "../../lib/connectDatabase";
import Task from "../../model/Task";


export async function GET(req, res) {
    await connectMongoDB;
    return NextResponse.json(await Task.find());
}

export async function POST(req) {
    const {description, completed} = await req.json();
    await connectMongoDB();
    await Task.create({description, completed});

    return NextResponse.json({message: "Task Created"}, {status: 201});
}