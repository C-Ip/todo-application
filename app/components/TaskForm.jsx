import { createTask } from "./TaskFormActions";
import { useState} from "react";


export default function TaskForm(props) {

    // Renders the new task Form.

    const [taskValue, setTaskValue] = useState("");
    const [isEmpty, setIsEmpty] = useState(true);

    function handleChange(event) {
        const { value } = event.target;
        if (value.length >= 1) {
            setIsEmpty(false);
        }
        setTaskValue(() => {
            return value;
        })
    }

    function submitForm(data) {
        props.close();
        createTask(data);
    }
    
    return (
        <div id="taskForm" className="fixed bg-white w-2/3 left-56 top-36 border-2 border-solid shadow-md rounded-lg z-auto dark:dark-mode-form">
            <h1 className="text-center text-lg">Add New Task</h1>
            {/* On submit, the form calls the create() function available in the ./TaskForm file to create the record, and closes popup */}
            <form autoFocus="true" action={ submitForm }>
                <textarea id="formInput" rows="1" onChange={handleChange} value={taskValue.value} type="text" name="newTask" placeholder="Enter your new task here..." autoComplete="off" autoFocus="true" className="resize-y text-inherit ml-1 mr-1 my-2 p-2 w-[99%] dark:dark-mode-form focus:outline-black outline-none"></textarea>
                <div className="bottom-0 flex justify-center">
                    <button name="cancel-task-button" type="reset" onClick={ props.close } className="mr-6 new-task-btn hover:new-task-btn-hover">Cancel</button>
                    <button name="create-task-button" type="submit" disabled={isEmpty ? true : false} className={ isEmpty ? " cursor-not-allowed disabled-task-btn" : "new-task-btn hover:new-task-btn-hover"}>Add</button>
                </div>
            </form>
        </div>      
    );
}