import { redirect } from "next/navigation";
import TaskList from "./components/TaskList";
import CreateTask from "./components/CreateTask";

export default function Home() {
  return (
    <section className="">
      <TaskList />

      {/* Form UI to create a new task */}
      <CreateTask />
    </section>
  );
}

