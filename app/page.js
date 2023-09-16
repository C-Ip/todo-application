import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function Home() {

  async function createTask(formData) {
    'use server'
    // Replace this code with MongoDB code to create the new task
    console.log(formData.get("newTask"));
    
    // TO DO: Fix the redirect so that the home pages reloads after submitting a new to do item.
    redirect("/");
  }

  return (
    <section>
      <div className="max-w-sm m-2 bg-slate-100 rounded shadow-md text-center dark:text-[#b1cddf] dark:bg-slate-500">
        <h1 className="text-lg">List Name</h1>
        <p>Task information</p>
      </div>
      <div>
        <form action={createTask}>
          <input type="text" name="newTask" placeholder="Enter your new task here..." autoComplete="off"></input>
          <button value="Create" type="submit"></button>
        </form>
      </div>
    </section>
  );
}

