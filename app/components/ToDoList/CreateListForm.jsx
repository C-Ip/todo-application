"use client"

import { createTask } from "../Form/FormActions";
import { useState } from "react";

export default function CreateListForm(props) {

    const [taskValue, setTaskValue] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);

    function handleChange(event) {
        const { value } = event.target;
        if (value.length >= 1) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
        setTaskValue(() => {
            return value;
        })
    }

    function handleForm(event) {
        props.onClose();
        createTask(event);
    }

    return (
        <div id="taskForm" className={props.createList ? "left-34 form-transition form-style dark:dark-mode-form" : "left-56 form-transition form-style dark:dark-mode-form"}>
            <h1 className="text-center text-lg">{ props.createList ? "Create New List" : "Create Task"}</h1>
            {/* On submit, the form calls the create() function available in the ./TaskForm file to create the record, and closes popup */}
            <form action={ handleForm } >
                {props.createList ? <input name="listName" autoFocus="true" placeholder="Enter the list name..." className="text-inherit ml-1 mr-1 my-2 p-2 w-[99%] focus:outline-black outline-none"></input> : ""}
                <textarea id="formInput" value={taskValue.value} onChange={handleChange} rows="1" type="text" name="newTask" placeholder="Enter your new task here..." autoComplete="off" className="resize-y text-inherit ml-1 mr-1 my-2 p-2 w-[99%] dark:dark-mode-form focus:outline-black outline-none"></textarea>
                <div className="bottom-0 flex justify-center">
                    <button onClick={ props.onClose } name="cancel-task-button" type="reset" className="mr-6 new-task-btn hover:new-task-btn-hover">Cancel</button>
                    <button name="create-task-button" type="submit" disabled={isEmpty ? true : false} className={ isEmpty ? " cursor-not-allowed disabled-task-btn" : "new-task-btn hover:new-task-btn-hover"}>Add</button>
                </div>
            </form>
        </div>      
    );
}