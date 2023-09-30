import Image from "next/image";
import deleteIcon from "../../public/recycle-bin.png"
import { GET } from "../api/tasks/route";

export default async function TaskList() {
    


    return (
        <section>
            <div className="m-2 max-w-sm">
                <div className="relative max-w-sm m-2 bg-slate-100 rounded shadow-md text-center dark:text-[#b1cddf] dark:bg-slate-500">
                    <h1 className="text-lg text-center">List Name</h1>
                    {/* ---------------- Task Flext Box --------------------- */}
                    <div className="flex flex-row">
                        <div className="basis-1/5"><input type="checkbox" value={false}></input></div>
                        <div className="basis-3/5">Pick up Ddangkong from Uncle Gordon's house</div>
                        <div className="basis-1/5"><button value="deleteTask" type="button" placeholder="Delete">
                            <Image
                                src={deleteIcon}
                                alt="Image of a trash can to represent delete."
                                width={40}
                                height={40}
                            /></button>
                        </div>
                    </div>
                    {/* ---------------------------------------------------------- */}
                </div>
                <button value="newTask" className="relative left-3/4 rounded-md ring-offset-2 ring-2 border-solid ring-black m-4">New Task</button>
            </div>
        </section>
    )
}