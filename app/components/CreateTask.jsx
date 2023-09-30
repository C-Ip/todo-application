import { POST } from "../api/tasks/route";

export default function CreateTask() {
    async function create(taskFormData) {
        "use server"
        const taskDetails = {
            "description": taskFormData.get("newTask"),
            "completed": false,
        }
        POST(taskDetails);
    }

    return (
        <div>
            <form action={create}>
                <input type="text" name="newTask" placeholder="Enter your new task here..." autoComplete="off" className="absolute left-10 w-9/12 h-1/2 border border-black border-solid text-lg"></input>
                <div className="absolute bottom-0 right-0">
                    <button name="cancel-task-button" className="text-center w-14 m-4 ring-slate-500 ring-offset-8 ring-2 rounded-full">Cancel</button>
                    <button name="create-task-button" type="submit" className="text-center w-14 m-4 ring-slate-500 ring-offset-8 ring-2 rounded-full">Add</button>
                </div>
            </form>
        </div>
    )
}