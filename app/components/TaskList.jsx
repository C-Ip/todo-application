import { GET } from "../api/tasks/route";
import Task from "./Task";
import NewTask from "./NewTask";
import CreateListButton from "./CreateListButton";
import List from "./List";



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
    
    const tasksList = await GET();

    // return (
    //     <section>
    //         <div className="relative my-4 ml-4 max-w-sm dark:dark-mode">
    //             <div className="relative max-w-sm mb-4 bg-slate-100 rounded shadow-md text-center">
    //                 <h1 className="text-lg text-center">List Name</h1>
    //                 {/* ---------------- Task Flext Box --------------------- */}
    //                 { tasksList.map(createTask) }
    //                 {/* ---------------------------------------------------------- */}
    //             </div>
    //         <NewTask/>
    //         </div>
    //     </section>
    // ) 

    if(tasksList.length > 0) {
        return (
            <section>
                <div className="relative my-4 ml-4 max-w-sm dark:dark-mode">
                    <div className="relative max-w-sm mb-4 bg-slate-100 rounded shadow-md text-center">
                        <h1 className="text-lg text-center"></h1>
                        {/* ---------------- Task Flext Box --------------------- */}
                        { tasksList.map(createTask) }
                        {/* ---------------------------------------------------------- */}
                    </div>
                <NewTask/>
                </div>
            </section>
        ) 
    } else {
        return (<CreateListButton />);
    }
}