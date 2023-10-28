"use server";

import { GET, POST, DELETE } from "../api/tasks/route";
import { redirect } from "next/navigation";

// Creates the record in the DB by calling the POST function that can also be used as an API call.
export async function createTask(taskFormData) {
    const taskDetails = {
        "listName": taskFormData.get("listName"),
        "description": taskFormData.get("newTask"),
        "completed": false,
    }
    POST(taskDetails);
    redirect("/");

}

export async function remove(deleteQuery) {

    DELETE({id: deleteQuery});
    redirect("/");
}

// TODO: Check if this can be removed. Redundent.
export default async function TaskFormActions() {

}