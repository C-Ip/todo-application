import TaskList from "./components/TaskList";
import TaskFormActions from "./components/TaskFormActions";
import CreateListButton from "./components/CreateListButton";

export default function Home() {
  return (
    <section>
      <TaskList />
      <TaskFormActions />
    </section>
  );
}

