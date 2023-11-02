import { GET } from "../api/tasks/route";
import Task from "./Task";
import CreateListButton from "./ToDoList/CreateListButton";



export default async function TaskList() {

    function createTask(task) {

        return (
            <div>
                <h1 className="text-lg text-center">{task.listName}</h1>
                <Task 
                    id={task.id}
                    key={task.id}
                    description={task.description}
                />
            </div>
        )
    }

    const taskList = await GET();

    if(taskList.length > 0) {
        return (
            <section>
                <div className="relative my-4 ml-4 max-w-sm dark:dark-mode">
                    <div className="relative max-w-sm mb-4 bg-slate-100 rounded shadow-md text-center">
                        <h1 className="heading"></h1>
                        {/* ---------------- Task Flext Box --------------------- */}
                        { taskList.map(createTask) }
                        {/* ---------------------------------------------------------- */}
                    </div>
                <CreateListButton key="create-list-button" toCreateList={false}/>
                </div>
            </section>
        ); 
    } else {
        return (
            <section>
                <h1 className="heading mb-4">No list has been created.</h1>
                <CreateListButton key="create-list-button" toCreateList={true}/>
        </section>
        );
    }
}