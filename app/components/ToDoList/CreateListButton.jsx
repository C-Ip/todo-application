"use client"

import CreateListForm from "./CreateListForm";
import { useState } from "react";

export default function CreateListButton(props) {

    const [createList, setCreateList] = useState(false);

    function handleCreateList() {
        setCreateList(createList => !createList);
    }

    return (
        <div className="flex justify-center">
            <button type="button" onClick={ handleCreateList } className="new-task-btn hover:new-task-btn-hover">{props.toCreateList? "Create New List" : "Create New Task" }</button>
            {createList ? <CreateListForm createList={props.toCreateList} onClose={ handleCreateList }/> : ""}
        </div>
    )
}