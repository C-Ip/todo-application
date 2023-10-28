"use client"

import CreateListForm from "./CreateListForm";
import { useState } from "react";

export default function CreateListButton() {

    const [createList, setCreateList] = useState(false);

    function handleCreateList() {
        setCreateList(createList => !createList);
    }

    return (
        <div className="flex justify-center">
            <button type="button" onClick={ handleCreateList } className="new-task-btn hover:new-task-btn-hover">Create List</button>
            {createList ? <CreateListForm onClose={ handleCreateList }/> : ""}
        </div>
    )
}