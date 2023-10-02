import { GET } from "../api/tasks/route";
import Task from "./Task";
import NewTask from "./NewTask";

function createTask(task) {
    return (
    <Task 
        key={task.id}
        description={task.description}
        />
    )
}

export default async function TaskList() {
    
    const tasksList = await GET();

    return (
        <section>
            <div className="m-2 max-w-sm">
                <div className="relative max-w-sm m-2 bg-slate-100 rounded shadow-md text-center">
                    <h1 className="text-lg text-center">List Name</h1>
                    {/* ---------------- Task Flext Box --------------------- */}
                    {tasksList.map(createTask)}
                    {/* ---------------------------------------------------------- */}
                </div>
            <NewTask />
            </div>
        </section>
    )
}