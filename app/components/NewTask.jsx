"use client"

import { useState } from "react";
import Form from "./Form";

export default function NewTask() {

    // Utilizes React's useState to set when to display the Form to create a new Task.

    const [showFormModal, setShowFormModal] = useState(false);

    function handleFormModal() {
        setShowFormModal(showFormModal => !showFormModal);
    }


    return(
        <>
        <button value="newTask" type="button" onClick={handleFormModal} className="relative left-3/4 rounded-md ring-offset-2 ring-2 border-solid ring-black m-4">New Task</button>
        {showFormModal ? <Form close = { handleFormModal }/> : null}
        </>
    );
}