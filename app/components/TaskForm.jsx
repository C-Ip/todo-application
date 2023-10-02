//"use server";

import { POST } from "../api/tasks/route";

export async function create(taskFormData) {
    const taskDetails = {
        "description": taskFormData.get("newTask"),
        "completed": false,
    }
    POST(taskDetails);
}

export default function TaskForm() {
    async function create(taskFormData) {
        "use server"
        const taskDetails = {
            "description": taskFormData.get("newTask"),
            "completed": false,
        }
        POST(taskDetails);
    }

    return (
        <div className="absolute bg-white w-2/3 left-64 top-36 border-2 border-solid shadow-md rounded-lg z-auto hidden">
            <h1 className="text-center text-lg">Add New Task</h1>
            <form action={create}>
                {/* className="relative left-10 w-9/12 h-1/2 border border-black border-solid text-lg" */}
                <input type="text" name="newTask" placeholder="Enter your new task here..." autoComplete="off" className="my-2 h-40 w-[99.9%] rounded-lg"></input>
                <div className="bottom-0 self-center">
                    <button name="cancel-task-button" type="button" className="form-buttons ring-slate-500 ring-offset-8 ring-2">Cancel</button>
                    <button name="create-task-button" type="submit" className="absolute right-0 form-buttons ring-slate-500 ring-offset-8 ring-2 rounded-full">Add</button>
                </div>
            </form>
        </div>
    )
}