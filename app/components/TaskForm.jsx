"use server";

import { POST } from "../api/tasks/route";
import { redirect } from "next/navigation";

// Creates the record in the DB by calling the POST function that can also be used as an API call.
export async function create(taskFormData) {
    console.log(taskFormData);
    const taskDetails = {
        "description": taskFormData.get("newTask"),
        "completed": false,
    }
    POST(taskDetails);
    redirect("/");

}

// TODO: Check if this can be removed. Redundent.
export default async function TaskForm() {
    async function create(taskFormData) {
        const taskDetails = {
            "description": taskFormData.get("newTask"),
            "completed": false,
        }
        POST(taskDetails);
    }
}