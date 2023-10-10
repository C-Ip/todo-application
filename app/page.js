import { redirect } from "next/navigation";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import TaskForm from "./components/TaskForm";

export default function Home() {
  return (
    <section className="">
      <TaskList />

      {/* Form UI to create a new task */}
      <TaskForm />
    </section>
  );
}

