"use client"

import Image from "next/image";
import { remove } from "./Form/FormActions";
import deleteIcon from "../../public/recycle-bin.png";

export default function Task(props) {

    function handleDelete() {
        remove(props.id);
    }

    return (
        <div className="flex flex-row items-center">
            <div className="basis-1/5">
                <label>
                    <input type="checkbox" value={false}></input>
                </label>
            </div>
            <p className="basis-3/5">{props.description}</p>
            <div className="basis-1/5 p-2">
                <button id={props.id} onClick={handleDelete} value="deleteTask" type="button" placeholder="Delete">
                <Image
                    src={deleteIcon}
                    alt="Image of a trash can to represent delete."
                    width={30}
                    height={30}
                /></button>
            </div>
        </div>
    )
}