"use client"

import { create } from "./TaskForm";


export default function Form(props) {

    // Renders the new task Form.

    function submitForm(data) {
        props.close();
        create(data);
    }
    
    return (
            <div id="taskForm" className="absolute bg-white w-2/3 left-64 top-36 border-2 border-solid shadow-md rounded-lg z-auto">
            <h1 className="text-center text-lg">Add New Task</h1>
            {/* On submit, the form calls the create() function available in the ./TaskForm file to create the record, and closes popup */}
            <form action={ submitForm }>
                <input id="formInput" type="text" name="newTask" placeholder="Enter your new task here..." autoComplete="off" className="my-2 h-40 w-[99.9%] rounded-lg"></input>
                <div className="bottom-0 self-center">
                    <button name="cancel-task-button" type="reset" onClick={ props.close } className="form-buttons ring-slate-500 ring-offset-8 ring-2">Cancel</button>
                    <button name="create-task-button" type="submit" className="absolute right-0 form-buttons ring-slate-500 ring-offset-8 ring-2 rounded-full">Add</button>
                </div>
            </form>
        </div>      
    );
}