"use client"

import { useState } from "react";
import TaskForm from "./TaskForm";

export default function NewTask() {

    // Utilizes React's useState to set when to display the Form to create a new Task.
    const [showFormModal, setShowFormModal] = useState(false);


    function handleFormModal() {
        setShowFormModal(showFormModal => !showFormModal);
    }

    return(
        <div className="flex justify-center">
        <button value="newTask" type="button" onClick={handleFormModal} className="new-task-btn hover:new-task-btn-hover">New Task</button>
        {showFormModal ? <TaskForm close = { handleFormModal }/> : null}
        </div>
    );
}