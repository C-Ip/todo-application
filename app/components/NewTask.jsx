//"use client"
import { create } from "./TaskForm";

export default function NewTask() {

    function openNewTaskForm() {
        console.log("Open task form");
        return (
            <></>
        )
    }

    return(
        //<button value="newTask" type="button" onClick={openNewTaskForm} className="relative left-3/4 rounded-md ring-offset-2 ring-2 border-solid ring-black m-4">New Task</button>

        <button value="newTask" type="button" className="relative left-3/4 rounded-md ring-offset-2 ring-2 border-solid ring-black m-4">New Task</button>
    )
}