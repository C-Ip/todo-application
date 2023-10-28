import { createTask } from "./TaskFormActions";

export default function CreateListForm(props) {

    function createList(event) {
        props.onClose();
        createTask(event);
    }

    return (
        <div id="taskForm" className="fixed bg-white w-2/3 left-34 top-36 border-2 border-solid shadow-md rounded-lg z-auto dark:dark-mode-form">
            <h1 className="text-center text-lg">New List Name</h1>
            {/* On submit, the form calls the create() function available in the ./TaskForm file to create the record, and closes popup */}
            <form action={ createList } >
                <input name="listName" autoFocus="true" placeholder="Enter the list name..." className="text-inherit ml-1 mr-1 my-2 p-2 w-[99%] focus:outline-black outline-none"></input>
                <textarea id="formInput" rows="1" type="text" name="newTask" placeholder="Enter your new task here..." autoComplete="off" className="resize-y text-inherit ml-1 mr-1 my-2 p-2 w-[99%] dark:dark-mode-form focus:outline-black outline-none"></textarea>
                <div className="bottom-0 flex justify-center">
                    <button onClick={ props.onClose } name="cancel-task-button" type="reset" className="mr-6 new-task-btn hover:new-task-btn-hover">Cancel</button>
                    <button name="create-task-button" type="submit"  className="new-task-btn hover:new-task-btn-hover">Add</button>
                </div>
            </form>
        </div>      
    );
}