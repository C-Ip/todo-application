"use client"

import { useEffect } from "react";

export default function CloseForm() {
    console.log("Close");
        useEffect(() => {
            var closeTask = document.getElementById("taskForm");
            closeTask.style.display = "";
        
            var resetInput = document.getElementById("formInput");
            resetInput.value = "";
    }, [])
}